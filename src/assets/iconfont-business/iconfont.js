(window._iconfont_svg_string_4686687 =
  '<svg><symbol id="icon-yanzhengma" viewBox="0 0 1024 1024"><path d="M835.1 200.9c-7.7 0.3-15.3 0.4-22.7 0.4-194.9 0-280.9-82.6-281.6-83.3l-19.4-19.7-19.6 19.7c-0.8 0.9-85 83.3-281.5 83.3-7.4 0-15-0.1-22.7-0.4l-27.4-0.9v374.4c0 98 35.4 241 341.6 350.4l9.6 3.4 9.6-3.4c306.2-109.4 341.6-252.4 341.6-350.4V200l-27.5 0.9M481.2 671.2L304.8 517.6l46.8-37.3 93.8 68S574.9 416.6 700 355l17.9 19.8S561.6 502.2 481.2 671.2m0 0"  ></path></symbol></svg>'),
  (n => {
    var e = (t = (t = document.getElementsByTagName("script"))[
        t.length - 1
      ]).getAttribute("data-injectcss"),
      t = t.getAttribute("data-disable-injectsvg");
    if (!t) {
      var o,
        i,
        c,
        d,
        s,
        a = function (e, t) {
          t.parentNode.insertBefore(e, t);
        };
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
          );
        } catch (e) {
          console && console.log(e);
        }
      }
      (o = function () {
        var e,
          t = document.createElement("div");
        (t.innerHTML = n._iconfont_svg_string_4686687),
          (t = t.getElementsByTagName("svg")[0]) &&
            (t.setAttribute("aria-hidden", "true"),
            (t.style.position = "absolute"),
            (t.style.width = 0),
            (t.style.height = 0),
            (t.style.overflow = "hidden"),
            (t = t),
            (e = document.body).firstChild
              ? a(t, e.firstChild)
              : e.appendChild(t));
      }),
        document.addEventListener
          ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener("DOMContentLoaded", i, !1), o();
              }),
              document.addEventListener("DOMContentLoaded", i, !1))
          : document.attachEvent &&
            ((c = o),
            (d = n.document),
            (s = !1),
            r(),
            (d.onreadystatechange = function () {
              "complete" == d.readyState &&
                ((d.onreadystatechange = null), l());
            }));
    }
    function l() {
      s || ((s = !0), c());
    }
    function r() {
      try {
        d.documentElement.doScroll("left");
      } catch (e) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
