const images=[
    'Resources/image1.jpg',
    'Resources/image2.jpg',
    'Resources/image3.jpg',
    'Resources/image4.jpg',
    
];
let currentIndex=0;
const slide=document.getElementById('img_slide');
const nextbtn1=document.getElementById('nextbutton_1');
const nextbtn2=document.getElementById('nextbutton_2');

nextbtn1.addEventListener('click',()=>{
    currentIndex=(currentIndex+1)%images.length;
    slide.src=images[currentIndex];
});

nextbtn2.addEventListener('click',()=>{
    currentIndex=(currentIndex+1)%images.length;
    slide.src=images[currentIndex];
});

async function fetchCourses(){
    try{
        // const apiKey = 'your_api_key_here'; 
        const response= await fetch('https://jsonplaceholder.typicode.com/posts');
        const data=await response.json();

        const courselist=document.getElementById('courselist');
        data.forEach(course=>{
            const courseCard= document.createElement('div');
            courseCard.className='course-card';

            // const courseImage=document.createElement('img');
            // courseImage.src=course.image;

            const courseTitle=document.createElement('h3');
            courseTitle.textContent=course.title;

            const courseDescription=document.createElement('p');
            courseDescription.textContent=course.description;

            courseCard.appendChild(courseImage);
            courseCard.appendChild(courseTitle);
            courseCard.appendChild(courseDescription);

            courselist.appendChild(courseCard);

        });
    }
    catch (error) {
        console.error('Error fetching courses:', error);
    }
    document.addEventListener('DOMContentLoaded',fetchCourses);
}

