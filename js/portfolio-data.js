/*
 * Single source of truth for the Portfolio section.
 * Each project drives three things from one place:
 *   1) The homepage grid tile (#portfolio)
 *   2) The homepage quick-preview modal
 *   3) The standalone, shareable page at /portfolio/project.html?id=<slug>
 *
 * media: either { type: "image", src, alt } or { type: "slideshow", slides: [{src, caption}, ...] }
 * bodyHtml: inner HTML for the right-hand detail column (kept close to the original modal markup)
 */
(function (global) {
  "use strict";

  var PORTFOLIO_PROJECTS = [
    {
      slug: "thorns",
      title: "THORNS",
      subtitle: "Tree & Horticulture Operations Registry and Network System",
      categories: ["outsystems"],
      thumb: { src: "img/portfolio/thorns-logo-with-name.jpg", alt: "THORNS" },
      media: { type: "image", src: "img/portfolio/thorns-logo-with-name.jpg", alt: "THORNS" },
      bodyHtml:
        '<p>THORNS is an enterprise low-code platform built on OutSystems for Changi Airport Group (CAG) to digitize ' +
        "the airport's horticulture and landscape operations. It consolidates asset &amp; tree registry, contractor " +
        "and contract management, work scheduling, inspections, attendance, fault reporting, and GIS-based asset " +
        "mapping into a single system spanning web, mobile, and offline field workflows.</p>" +
        '<ul class="list-inline item-details">' +
        "<li><strong>Client:</strong> <text>Changi Airport Group (CAG)</text></li>" +
        "</ul>" +
        '<ul class="list-inline item-details">' +
        "<li><strong>Tools used:</strong> <text>OutSystems, GIS/Map integration</text></li>" +
        "</ul>"
    },
    {
      slug: "hogevarde",
      title: "HogeVarde",
      categories: ["web-apps"],
      thumb: { src: "img/portfolio/hogevarde_logo.png", alt: "", imgClass: "" },
      media: { type: "image", src: "img/portfolio/hogevarde/hoge1.jpeg", alt: "" },
      bodyHtml:
        '<div class="project-summary">' +
        '<div class="project-company">HogeVarde - Snow Plowing Service | Norway</div>' +
        '<div class="project-description"><ul>' +
        "<li>Developed and maintained the backend infrastructure for HogeVarde, a snow plowing service.</li>" +
        "<li>Designed and implemented RESTful APIs to support iOS and Android applications.</li>" +
        "<li>Ensured seamless integration between the backend system and mobile applications for real-time data updates.</li>" +
        "<li>Focused on optimizing server performance and scalability to handle high traffic during peak seasons.</li>" +
        "<li>Employed security best practices to protect user data and service integrity.</li>" +
        "<li>Collaborated with front-end developers and mobile app teams to ensure cohesive functionality across platforms.</li>" +
        "</ul></div></div>"
    },
    {
      slug: "win2gain",
      title: "Win 2 Gain",
      categories: ["web-apps"],
      thumb: { src: "img/portfolio/win_logo.png", alt: "", imgClass: "" },
      media: { type: "image", src: "img/portfolio/win/win1.jpg", alt: "" },
      bodyHtml:
        "<p>A dynamic quiz application designed to provide users with an engaging and educational experience. " +
        "The app includes features such as user authentication, randomized questions, real-time scoring, and " +
        "performance tracking.</p>" +
        '<ul class="list-inline item-details"><li><strong>Responsibilities:</strong><ul>' +
        "<li>Designed and implemented the user interface and user experience (UI/UX)</li>" +
        "<li>Developed backend services for user authentication and data management</li>" +
        "<li>Integrated a database to store and retrieve quiz questions and user data</li>" +
        "<li>Conducted testing and debugging to ensure a seamless user experience</li>" +
        "<li>Deployed and maintained the application on a live server</li>" +
        "</ul></li></ul>" +
        '<ul class="list-inline item-details"><li><strong>Tools used:</strong> <text>.Net Core, SQL Server, MongoDB</text></li></ul>' +
        '<ul class="list-inline item-details">' +
        '<li><strong>Web Link : </strong><a href="https://win2gain.com/" target="_blank">https://win2gain.com/</a></li>' +
        '<li><strong>Android App: </strong><a href="https://play.google.com/store/apps/details?id=com.gakk.win" target="_blank">https://play.google.com/store/apps/details?id=com.gakk.win</a></li>' +
        "</ul>"
    },
    {
      slug: "quizchamp",
      title: "MyGP QuizChamp",
      categories: ["web-apps"],
      thumb: { src: "img/portfolio/quiz-champ-logo.svg", alt: "", imgStyle: "width: 80%;" },
      media: { type: "image", src: "img/portfolio/quizChampCover.jpg", alt: "" },
      bodyHtml:
        "<p>QuizChamp is a quiz app integrated in MyGP app. It offers a wide range of quiz play formats and runs " +
        "campaigns which reward user on a regular basis. The application (back end) is done using .NET 6, along " +
        "with SQL Server as its primary database. MongoDB is used for error logging and user activity tracking.</p>" +
        '<ul class="list-inline item-details"><li><strong>Clients:</strong> <text>Grameenphone</text></li></ul>' +
        '<ul class="list-inline item-details"><li><strong>Tools used:</strong> <text>.Net Core, SQL Server, MongoDB</text></li></ul>' +
        '<ul class="list-inline item-details"><li><strong>Feature Overview: </strong>' +
        '<a href="https://www.screencast.com/t/5daDPLyR" target="_blank">https://www.screencast.com/t/5daDPLyR</a></li></ul>'
    },
    {
      slug: "noor-islamic",
      title: "Noor : Islamic App",
      categories: ["web-apps"],
      thumb: { src: "img/portfolio/noor-logo.png", alt: "", imgClass: "" },
      media: {
        type: "slideshow",
        slides: [
          { src: "/img/portfolio/noor/noor1.jpg", caption: "Quran" },
          { src: "/img/portfolio/noor/noor2.jpg", caption: "Prayer time" },
          { src: "/img/portfolio/noor/noor3.jpg", caption: "Hadiths" },
          { src: "/img/portfolio/noor/noor4.jpg", caption: "Qibla finder" },
          { src: "/img/portfolio/noor/noor5.jpg", caption: "Menu Items" }
        ]
      },
      bodyHtml:
        "<p>I worked on the backend of Noor : Islamic App, which is the largest islamic app in Bangladesh. It offers " +
        "a wide range of features - including both free and premium content.</p>" +
        "<ul>" +
        "<li>Hajj Preregistration</li><li>Ifter Sehri Timing</li><li>Live Islamic Podcast</li>" +
        "<li>Khatam e Quran</li><li>Noor Jiggasha</li><li>Eid Jamat Timing</li><li>Umrah Reregistration</li>" +
        "</ul>" +
        "<p>Backend is developed using .Net framework. A CMS is also developed in Angular for content management.</p>" +
        '<ul class="list-inline item-details"><li><strong>Clients: </strong><text>Robi/Internal</text></li></ul>' +
        '<ul class="list-inline item-details"><li><strong>Tools used: </strong><text>.Net Framework, MS SQL Server, Angular.</text></li></ul>' +
        '<ul class="list-inline item-details"><li><strong>Live Apps: </strong><ul>' +
        '<li>Android - <a href="https://play.google.com/store/apps/details?id=com.mcc.noor" target="_blank">https://play.google.com/store/apps/details?id=com.mcc.noor</a></li>' +
        '<li>iOS - <a href="https://apps.apple.com/my/app/noor-islamic-lifestyle/id1567030394" target="_blank">https://apps.apple.com/my/app/noor-islamic-lifestyle/id1567030394</a></li>' +
        '<li>Angular CMS - <a href="http://27.131.15.12:802/dashboard" target="_blank">http://27.131.15.12:802/dashboard</a></li>' +
        "</ul></li></ul>"
    },
    {
      slug: "football-star",
      title: "Football Star",
      categories: ["web-apps"],
      thumb: { src: "img/portfolio/football-star.png", alt: "", imgClass: "" },
      media: {
        type: "slideshow",
        slides: [
          { src: "/img/portfolio/football-star-slides/1.jpg", caption: "Login/Registration screen" },
          { src: "/img/portfolio/football-star-slides/2.jpg", caption: "Home page" },
          { src: "/img/portfolio/football-star-slides/3.jpg", caption: "Text based MCQ" },
          { src: "/img/portfolio/football-star-slides/4.jpg", caption: "Image Quiz" },
          { src: "/img/portfolio/football-star-slides/5.jpg", caption: "Score" },
          { src: "/img/portfolio/football-star-slides/6.jpg", caption: "Nagad Trivia" }
        ]
      },
      bodyHtml:
        "<p>A small quiz App for Nagad, developed and launched on the occasion of of FIFA 2022 World Cup.</p>" +
        '<ul class="list-inline item-details"><li><strong>Clients: </strong><text>Nagad</text></li></ul>' +
        '<ul class="list-inline item-details"><li><strong>Tools used: </strong><text>.Net Core 3.1, Razor pages, MS SQL Server.</text></li></ul>' +
        '<ul class="list-inline item-details"><li><strong>Feature Overview: </strong>' +
        '<a href="https://app.screencast.com/mRdF5AqukmfEm" target="_blank">https://app.screencast.com/mRdF5AqukmfEm</a></li></ul>'
    },
    {
      slug: "onlinesales",
      title: "Online Sales & Distribution System (OSDS)",
      categories: ["web-apps"],
      thumb: { src: "img/portfolio/onlinesales.png", alt: "", imgClass: "" },
      media: { type: "image", src: "img/portfolio/onlinesales.png", alt: "" },
      bodyHtml:
        "<p>Online Sales is the most popular secondary sales and distribution system in Bangladesh with the " +
        "capability of designing complex and fully dynamic promotion and incentive modules. This is the web " +
        "conversion of offline DMS. This system covers the whole secondary sales and related supply chain related " +
        "business requirements</p>" +
        '<ul class="list-inline item-details"><li><strong>Clients:</strong> <text>Unilever Bangladesh Limited, Nestlé Bangladesh Limited, ' +
        "Japan Tobacco International Bangladesh, Perfetti Van Melle BD Pvt. Ltd, Standard Finis Oil Co., Abul Khair Group, " +
        "Transcom Distribution Company Limited (Tdcl), Transcom Consumer Product Ltd, Arla Foods Bangladesh Ltd., " +
        "Quazi Enterprises Limited, Burroughs Wellcome, and co. (Bangladesh) limited, Godrej Bangladesh, " +
        "AM Beverage Unit-Coca-Cola – AMLBD, Dekko Group, and more</text></li></ul>" +
        '<ul class="list-inline item-details"><li><strong>Tools used:</strong> <text>ASP.net, SQL Server -2012, 2014, 2016, ' +
        "Ajax, JavaScript, Bootstrap, SSAS, SSIS, SSRS, Windows Service, SOAP, REST Services, Firebase</text></li></ul>" +
        '<ul class="list-inline item-details"><li><strong>Feature Overview: </strong>' +
        '<a href="https://www.screencast.com/t/3XlbNY1Onj" target="_blank">https://www.screencast.com/t/3XlbNY1Onj</a></li></ul>'
    },
    {
      slug: "dms",
      title: "Distribution Management System (DMS)",
      categories: ["winform-based-apps"],
      thumb: { src: "img/portfolio/dms.png", alt: "", imgClass: "" },
      media: { type: "image", src: "img/portfolio/dms.png", alt: "" },
      bodyHtml:
        "<p>DMS (Desktop Based) was the most popular secondary sales and distribution system (FMCG) in Bangladesh " +
        "with the capability of designing complex and fully dynamic promotion and incentive modules. This system " +
        "covers the whole secondary sales and related supply chain-related business requirements</p>" +
        '<ul class="list-inline item-details"><li><strong>Client:</strong> <text>Nestlé Bangladesh Limited, Unilever Bangladesh Limited, ' +
        "GSK Bangladesh, New Zealand Dairy Products Bangladesh Ltd.</text></li></ul>" +
        '<ul class="list-inline item-details"><li><strong>Tools used:</strong> <text>C#, ASP.Net Webworms (Reporting), SQL Server -2008, ' +
        ".NET 4.5,3 Tier Architecture, Android, MS Visual Studio 2008,2010, jQuery, Telerik, Web API, SOAP.</text></li></ul>"
    },
    {
      slug: "mis",
      title: "Management Information System",
      categories: ["web-apps"],
      thumb: { src: "img/portfolio/mis.jpg", alt: "", imgClass: "" },
      media: { type: "image", src: "img/portfolio/mis.jpg", alt: "" },
      bodyHtml:
        "<p>Central Reporting System of Country-wide Sales Points.</p>" +
        '<ul class="list-inline item-details"><li><strong>Clients: </strong><text>Nestlé Bangladesh Limited</text></li></ul>' +
        '<ul class="list-inline item-details"><li><strong>Tools used: </strong><text>Silverlight, SQL Server -2012, MVVM Framework</text></li></ul>'
    },
    {
      slug: "easegl",
      title: "Ease GL",
      categories: ["winform-based-apps"],
      thumb: { src: "img/portfolio/easegl.jpg", alt: "EaseGL", imgClass: "" },
      media: { type: "image", src: "img/portfolio/easegl.jpg", alt: "EaseGL" },
      bodyHtml:
        "<p>EaseGL helps bookkeepers and accountants in recording and reporting a firm's financial transactions. " +
        "It provides all the key features, such as general ledgers, chart of accounts, invoicing, tax management, " +
        "account reconciliation, accounts payable, accounts receivable, payroll and financial reporting, payments " +
        "records, should be included in any accounting software. It also assist with the administration of financial " +
        "rules, such as state-by-state legislation on issues such as online sales tax.</p>" +
        '<ul class="list-inline item-details"><li><strong>Clients: </strong><text>Orion Group, Beacon Pharmaceuticals Limited</text></li></ul>' +
        '<ul class="list-inline item-details"><li><strong>Tools used: </strong><text>C# WinForm, SQL Server 2005/08</text></li></ul>'
    },
    {
      slug: "orionsales",
      title: "Orion Sales",
      categories: ["winform-based-apps"],
      thumb: { src: "img/portfolio/orionsales.jpg", alt: "", imgClass: "" },
      media: { type: "image", src: "img/portfolio/orionsales.jpg", alt: "" },
      bodyHtml:
        "<p>Sales and distribution system exclusively designed for Orion Pharma. The system covers from order " +
        "download to delivery (/returns) along with different reporting interfaces.</p>" +
        '<ul class="list-inline item-details"><li><strong>Clients: </strong><text>Orion Pharma Limited</text></li></ul>' +
        '<ul class="list-inline item-details"><li><strong>Tools used: </strong><text>C# WinForm, SQL Server 2005/08</text></li></ul>'
    },
    {
      slug: "memo-printing",
      title: "Cash Memo Printing",
      categories: ["web-apps", "winform-based-apps"],
      thumb: { src: "img/portfolio/memo.jpg", alt: "", imgClass: "" },
      media: { type: "image", src: "img/portfolio/memo.jpg", alt: "" },
      bodyHtml:
        "<p>This is a module, part of bot Online Sales and DMS, that gives the users the ability to print cash Memo " +
        "precisely using dot matrix printers. On the web, it is implemented with Telerik controls and RDLC is used " +
        "in the Desktop version. The code is written in such a way that necessary information could be passed easily " +
        "if you would like to use a third party (VAT compliant) to do the job.</p>" +
        '<ul class="list-inline item-details"><li><strong>Clients: </strong><text>Most of the client that use OnlineSales and DMS ' +
        "(Unilever, Nestle etc.).</text></li></ul>" +
        '<ul class="list-inline item-details"><li><strong>Tools used: </strong><text>ASP.Net Web Forms, C# WinForm, SQL Server 08,14,17 etc., ' +
        "Telerik reporting, RDLC</text></li></ul>"
    },
    {
      slug: "orion-android",
      title: "Orion Android",
      categories: ["android"],
      thumb: { src: "img/portfolio/orionandroid.jpg", alt: "", imgClass: "" },
      media: { type: "image", src: "img/portfolio/orionandroid.jpg", alt: "" },
      bodyHtml:
        "<p>Order collection system used by Orion SRs. The app connects with the central database through REST API.</p>" +
        '<ul class="list-inline item-details"><li><strong>Clients: </strong><text>Orion Pharma Limited</text></li></ul>' +
        '<ul class="list-inline item-details"><li><strong>Tools used: </strong><text>Android Studio, Java, XML, SQLite</text></li></ul>'
    },
    {
      slug: "meenabazar",
      title: "Meena Bazar",
      categories: ["android"],
      thumb: { src: "img/portfolio/meenabazar.png", alt: "", imgClass: "" },
      media: {
        type: "slideshow",
        slides: [
          { src: "/img/portfolio/meena-slides/1.jpg", caption: "Login/Registration screen" },
          { src: "/img/portfolio/meena-slides/2.jpg", caption: "Product Details" },
          { src: "/img/portfolio/meena-slides/3.jpg", caption: "Burger Menu Options" },
          { src: "/img/portfolio/meena-slides/4.jpg", caption: "Shopping Cart" },
          { src: "/img/portfolio/meena-slides/5.jpg", caption: "Checkout Page" }
        ]
      },
      bodyHtml:
        "<p>Meena Bazar is a well reputed retail supermarket chain in Bangladesh with International standards. " +
        "Every Meena Bazar outlet carries almost 6,000-8,000 products to sell. It also produces organic products, " +
        "dairy items, prepared food &amp; herbal products. The Android app uses the same database of web platform " +
        "http://www.meenabazar.com.bd/, so the user will get the same functionality as web through their android " +
        "devices.</p>" +
        '<ul class="list-inline item-details"><li><strong>Clients: </strong><text>Gemcon Group</text></li></ul>' +
        '<ul class="list-inline item-details"><li><strong>Tools used: </strong><text>Android Studio, Java, XML, SQLite</text></li></ul>'
    }
  ];

  var PORTFOLIO_CATEGORIES = [
    { key: "all", label: "All" },
    { key: "web-apps", label: "Web Apps" },
    { key: "winform-based-apps", label: "WinForm Based Apps" },
    { key: "android", label: "Android" },
    { key: "outsystems", label: "Outsystems" }
  ];

  global.PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS;
  global.PORTFOLIO_CATEGORIES = PORTFOLIO_CATEGORIES;
})(window);
