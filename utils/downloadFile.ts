export function downloadFile(url?: string, title?: string) {
  if (url == undefined) {
    return;
  }

  const link = document.createElement("a");
  link.setAttribute('target', '_blank');
  link.href = url;
  document.body.appendChild(link);

  link.click();
  link.remove();
}
