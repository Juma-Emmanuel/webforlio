function scrollToSection(targetId){
    const target=document.querySelector(targetId);
    target.scrollIntoView({behaviour: 'smooth'});
}
window.addEventListener('scroll', function(){
  var floatingElement = document.getElementById('float');
  var contentHeight = document.getElementById('content');
  var scrollPosition = window.pageYOffset;

  if (scrollPosition > contentHeight){
    floatingElement.style.top = '10px';
  }
  else{
    floatingElement.style.top = '-100px';
  }

  
});

    function toggleVisibility(sectionIds,show) {
    var body = document.body;
    var selector="body > *";
    for(var i=0; i< sectionIds.length;i++){
      selector +=":not(#"+sectionIds[i] + ")";
       }

    var otherElements = document.querySelectorAll(selector);
    for (var j=0;j<sectionIds.length;j++){
        
    var section = document.getElementById(sectionIds[j]);
    if (show){
       body.style.overflow = "hidden";
      otherElements.forEach(function(element) {
        element.style.display = "none";
      });
      section.style.display = "block";
    } else {
      body.style.overflow = "auto";
      otherElements.forEach(function(element) {
        element.style.display = "block";
      });
      section.style.display = "none";
    }
  }
  }
 
