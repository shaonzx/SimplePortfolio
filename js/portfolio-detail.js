/*
 * Renders a single project on the standalone /portfolio/project.html?id=<slug>
 * page, using the same PORTFOLIO_PROJECTS data (js/portfolio-data.js) and
 * media renderer (js/portfolio.js) as the homepage modals, so the two never
 * drift apart.
 */
(function ($) {
  "use strict";

  function getQueryParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function findProject(slug) {
    var projects = window.PORTFOLIO_PROJECTS || [];
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].slug === slug) {
        return projects[i];
      }
    }
    return null;
  }

  function renderProject(project) {
    document.title = project.title + " - Atiqur Rahman";
    $("#page-title").text(project.title + " - Atiqur Rahman");

    var mediaHtml = window.PortfolioView ? window.PortfolioView.buildMediaHtml(project.media) : "";

    var html =
      '<div class="title-bar">' +
      '<h2 class="text-center">' + project.title + "</h2>" +
      (project.subtitle ? '<p class="text-center text-muted">' + project.subtitle + "</p>" : "") +
      '<div class="heading-border"></div>' +
      "</div>" +
      '<div class="row">' +
      '<div class="col-md-6">' + mediaHtml + "</div>" +
      '<div class="col-md-6">' + project.bodyHtml + "</div>" +
      "</div>";

    $("#project-content").html(html);

    // Re-trigger the slideshow's initial reveal in case this project uses one -
    // slideshow.js already ran its own $(document).ready before this content existed.
    if (project.media && project.media.type === "slideshow" && typeof window.currentSlide === "function") {
      window.currentSlide(1);
    }
  }

  $(document).ready(function () {
    var slug = getQueryParam("id");
    var project = slug ? findProject(slug) : null;

    if (!project) {
      $("#project-content").hide();
      $("#project-not-found").show();
      return;
    }

    renderProject(project);
  });
})(jQuery);
