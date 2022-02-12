document.querySelectorAll(".btn.lead").forEach(btn => {
  btn.addEventListener("click", function(e){
    if (fbq) {
      fbq("track", "Lead");
    }

    if (gtag) {
      gtag("event", "generate_lead");
    }
  });
})