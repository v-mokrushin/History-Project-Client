export function runAddBlocker() {
  setInterval(() => {
    const elems = Array.from(document.body.children);
    elems.forEach((elem) => {
      if (elem.id != "root" && elem.id != "ns") {
        console.log("ADDBLOCKER: DELETED =>", elem);
        document.body.removeChild(elem);
      }
    });

    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      if (iframe.className !== "YTFrame_video__LfIOj") {
        console.log("ADDBLOCKER: DELETED =>", iframe);
        iframe.parentElement?.removeChild(iframe);
        document.body.removeChild(iframe);
      }
    });
  }, 50);
}
