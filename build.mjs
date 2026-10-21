// Monta o site para hospedar.
//
// A fonte e page.html, escrita sem <html>, <head> e <body>: e assim que o
// artifact do Claude a recebe, e ele monta o esqueleto sozinho. Para o Firebase
// Hosting o documento precisa vir completo -- sem doctype o navegador cai no
// modo de compatibilidade e a pagina renderiza diferente.
//
// Uso: node site/build.mjs   (gera site/public/)

import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "public");
const page = readFileSync(join(here, "page.html"), "utf8");

// O titulo e o que vem antes do primeiro <link> ficam no head; o resto e corpo.
const headEnd = page.indexOf("</style>") + "</style>".length;
const head = page.slice(0, headEnd);
const body = page.slice(headEnd);

// Endereco publico do Firebase Hosting. A previa do link (WhatsApp, redes)
// so aparece com a imagem em endereco completo.
const site = "https://vipaapp.web.app";

const description =
  "O VIPA monta a rota da sua van escolar, mostra aos pais onde o filho está " +
  "e fecha o mês pra você. R$ 39,90 por mês, por van, com o primeiro mês grátis.";

const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="${description}">
<meta name="theme-color" content="#FFFFFF">
<meta property="og:title" content="VIPA">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${site}/">
<meta property="og:image" content="${site}/assets/vipa-logo.png">
<link rel="icon" href="assets/vipa-logo.png" type="image/png">
${head}
</head>
<body>
${body}
</body>
</html>
`;

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "index.html"), html);
cpSync(join(here, "assets"), join(out, "assets"), { recursive: true });
// Paginas legais (privacidade, termos, excluir conta). Os textos moram em
// site/legal/*.html e os campos que so o dono sabe, em site/legal/campos.json.
// Com algum campo vazio as paginas NAO entram no site: nao se publica um
// texto juridico com lacuna.
const legal = join(here, "legal");
const campos = JSON.parse(readFileSync(join(legal, "campos.json"), "utf8"));
const vazios = Object.keys(campos).filter(
  (k) => !k.startsWith("_") && String(campos[k]).trim() === "");
const paginas = [
  ["privacidade", "Política de Privacidade"],
  ["termos", "Termos de Serviço"],
  ["excluir-conta", "Excluir a conta"],
];
if (vazios.length > 0) {
  console.log(`paginas legais puladas: faltam ${vazios.join(", ")} em site/legal/campos.json`);
} else {
  const estilo = `<style>
body{margin:0;font:400 17px/1.6 Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:#111113;background:#fff}
main{max-width:720px;margin:0 auto;padding:32px 20px 64px}
a{color:#FF5A1F}
h1{font-size:30px;line-height:1.2;margin:8px 0 16px}
h2{font-size:20px;margin:28px 0 8px}
.nota{color:#6E6E73}
.topo{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.14em;color:#FF5A1F;text-decoration:none}
.topo img{width:32px;height:32px;border-radius:8px}
</style>`;
  for (const [nome, titulo] of paginas) {
    let corpo = readFileSync(join(legal, `${nome}.html`), "utf8");
    for (const [k, v] of Object.entries(campos)) {
      corpo = corpo.replaceAll(`{{${k}}}`, String(v));
    }
    const doc = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${titulo} · VIPA</title>
<link rel="icon" href="assets/vipa-logo.png" type="image/png">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400..800&display=swap">
${estilo}
</head>
<body>
<main>
<a class="topo" href="/"><img src="/assets/vipa-logo.png" alt="">VIPA</a>
${corpo}
</main>
</body>
</html>
`;
    writeFileSync(join(out, `${nome}.html`), doc);
  }
  console.log("paginas legais prontas");
}
console.log("site/public/ pronto");
