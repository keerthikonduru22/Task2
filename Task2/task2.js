// document.getElementById("addViewBtn").addEventListener("click", function () {
//   const viewTextarea = document.getElementById("viewTextarea");
//   const viewList = document.querySelector(".subinfostyle");

//   if (viewTextarea.value.trim() !== "") {
//     const div = document.createElement("div");
//     div.textContent = viewTextarea.value;
//     div.className = "viewItem";

//     viewList.appendChild(div);
//     viewTextarea.value = "";
//   }
// });
document.getElementById("addViewBtn").addEventListener("click", function () {
    const viewTextarea = document.getElementById("viewTextarea");
    const viewList = document.querySelector(".subinfostyle");

    if (viewTextarea.value.trim() !== "") {
        const div = document.createElement("div");
        div.className = "viewItem";

        const textDiv = document.createElement("div");
        textDiv.textContent = viewTextarea.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i> Delete';
        deleteBtn.className = "deleteBtn";
        deleteBtn.addEventListener("click", function() {
            viewList.removeChild(div);
        });

        div.appendChild(textDiv);
        div.appendChild(deleteBtn);
        viewList.appendChild(div);
        viewTextarea.value = "";
    }
});
document.querySelector('.menustyle img').addEventListener('click', function() {
        const medianavbar = document.querySelector('.closestyle');
        if (medianavbar.style.display === 'none' || medianavbar.style.display === '') {
            medianavbar.style.display = 'flex';
        } else {
            medianavbar.style.display = 'none';
        }
});
document.querySelector('.close').addEventListener("click", function () {
    const medianavbar = document.querySelector('.closestyle');
    
        medianavbar.style.display = 'none';

})    
document.querySelector(".iconstyle").addEventListener("click", function () {
    document.querySelector(".todostyle").classList.toggle('todototalstyle')
})
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        event.preventDefault();
    } else {
        emailError.style.display = 'none';
        alert('Your form is submitted!');
    }
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navlink');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});