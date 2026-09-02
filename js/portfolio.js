/*
 * Renders the Portfolio grid + quick-preview modals on the homepage from
 * PORTFOLIO_PROJECTS (js/portfolio-data.js). Each modal also links out to
 * /portfolio/project.html?id=<slug> so a single project can be shared
 * directly, without losing the existing "click thumbnail -> modal" flow.
 */
(function ($) {
  "use strict";

  function modalId(slug) {
    return "portfolioModal-" + slug;
  }

  function detailUrl(slug) {
    return "portfolio/project.html?id=" + encodeURIComponent(slug);
  }

  function buildMediaHtml(media) {
    if (!media) {
      return "";
    }

    if (media.type === "slideshow") {
      var slidesHtml = media.slides
        .map(function (slide, index) {
          return (
            '<div class="mySlides">' +
            '<div class="numbertext">' + (index + 1) + " / " + media.slides.length + "</div>" +
            '<img src="' + slide.src + '" style="width:100%">' +
            '<div class="text">' + slide.caption + "</div>" +
            "</div>"
          );
        })
        .join("");

      var dotsHtml = media.slides
        .map(function (_, index) {
          return '<span class="dot" onclick="currentSlide(' + (index + 1) + ')"></span>';
        })
        .join(" ");

      return (
        '<div class="slideshow-container">' +
        slidesHtml +
        '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>' +
        '<a class="next" onclick="plusSlides(1)">&#10095;</a>' +
        "</div><br>" +
        '<div style="text-align:center">' + dotsHtml + "</div>"
      );
    }

    return '<img class="img-fluid img-centered" src="' + media.src + '" alt="' + (media.alt || "") + '">';
  }

  function buildTileHtml(project) {
    var categoryClasses = project.categories.join(" ");
    var imgAttrs = 'class="img-fluid"';
    if (project.thumb.imgClass) {
      imgAttrs = 'class="img-fluid ' + project.thumb.imgClass + '"';
    }
    if (project.thumb.imgStyle) {
      imgAttrs += ' style="' + project.thumb.imgStyle + '"';
    }

    return (
      '<div class="col-sm-4 portfolio-item filter ' + categoryClasses + '">' +
      '<a class="portfolio-link" href="#' + modalId(project.slug) + '" data-toggle="modal">' +
      '<div class="caption-port"><div class="caption-port-content"><i class="fa fa-search-plus fa-3x"></i></div></div>' +
      "<img " + imgAttrs + ' src="' + project.thumb.src + '" alt="' + (project.thumb.alt || "") + '">' +
      "</a>" +
      "</div>"
    );
  }

  function buildModalHtml(project) {
    return (
      '<div class="portfolio-modal modal fade" id="' + modalId(project.slug) + '" tabindex="-1" role="dialog" aria-hidden="true">' +
      '<div class="modal-dialog" role="document"><div class="modal-content">' +
      '<div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div>' +
      '<div class="container"><div class="row"><div class="modal-body">' +
      '<div class="title-bar"><div class="col-md-12">' +
      '<h2 class="text-center">' + project.title + "</h2>" +
      (project.subtitle ? '<p class="text-center text-muted mb-0">' + project.subtitle + "</p>" : "") +
      '<div class="heading-border"></div>' +
      "</div></div>" +
      '<div class="row">' +
      '<div class="col-md-6">' + buildMediaHtml(project.media) + "</div>" +
      '<div class="col-md-6">' +
      project.bodyHtml +
      '<div class="modal-actions text-center mt-4">' +
      '<a class="btn btn-general btn-green mr-2 mb-2" href="' + detailUrl(project.slug) + '" target="_blank" rel="noopener">' +
      '<i class="fa fa-external-link"></i> Open Full Page</a>' +
      '<button class="btn btn-general btn-white mb-2" type="button" data-dismiss="modal">' +
      '<i class="fa fa-times"></i> Close</button>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div></div></div>" +
      "</div></div></div>"
    );
  }

  function renderPortfolioGrid() {
    var $grid = $("#portfolio-grid");
    var $modals = $("#portfolio-modals");
    if (!$grid.length || !window.PORTFOLIO_PROJECTS) {
      return;
    }

    var tilesHtml = window.PORTFOLIO_PROJECTS.map(buildTileHtml).join("");
    var modalsHtml = window.PORTFOLIO_PROJECTS.map(buildModalHtml).join("");

    $grid.html(tilesHtml);
    $modals.html(modalsHtml);
  }

  $(document).ready(renderPortfolioGrid);

  // Exposed for the standalone project detail page.
  window.PortfolioView = {
    buildMediaHtml: buildMediaHtml,
    detailUrl: detailUrl
  };
})(jQuery);
