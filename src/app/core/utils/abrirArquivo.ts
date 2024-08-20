import { Base64 } from '@core/models/base64';

export const abrirArquivo: (base64: Base64) => void = (base64: Base64) => {
  const wref = window.open('')!;
  wref.document.write(
    `<iframe width='100%' height='100%' frameborder='0' src='data:application/pdf;base64,${encodeURI(
      base64 as string
    )}'></iframe><script>
            var body = document.querySelector('body');
            body.style.margin = '0';
          </script>`
  );
};
