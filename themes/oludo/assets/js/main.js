document.querySelectorAll(".lead").forEach(btn => {
  btn.addEventListener("click", function(e){
    if (fbq) {
      fbq("track", "Contact");
    }

    if (gtag) {
      gtag("event", "generate_lead");
    }
  });
})