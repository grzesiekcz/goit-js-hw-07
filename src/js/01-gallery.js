"use strict";
import { galleryItems } from "./gallery-items.js";

// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
					<a class="gallery__link" href=${original}>
						<img
							class="gallery__image"
							src=${preview}
							data-source=${original}
							alt=${description}
						/>
					</a>
				</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const handlerGallery = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const modal = basicLightbox.create(`<img src=${e.target.dataset.source}>`);

  modal.show();

  const exit = (e) => {
    if (e.key === "Escape") {
      modal.close();
      window.removeEventListener("keydown", exit);
    }
  };
  window.addEventListener("keydown", exit);
};

gallery.addEventListener("click", handlerGallery);
