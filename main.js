import data from './cv.json'; // Assurez-vous que cv.json est dans le même dossier

// Compétences
const skills = document.getElementById('skills');
Object.entries(data.skills).forEach(([skill, description]) => {
    const li = document.createElement('li');
    li.textContent = `${skill}: ${description}`;
    skills.appendChild(li);
});

// Éducation
const education = document.getElementById('education');
data.education.forEach(edu => {
    const li = document.createElement('li');
    li.textContent = `${edu.degree} à ${edu.institution} (${edu.years})`;
    education.appendChild(li);
});

// Langues
const languages = document.getElementById('languages');
Object.entries(data.languages).forEach(([lang, level]) => {
    const li = document.createElement('li');
    li.textContent = `${lang}: ${level}`;
    languages.appendChild(li);
});

// Loisirs
const hobbies = document.getElementById('hobbies');
data.hobbies.forEach(hobby => {
    const li = document.createElement('li');
    li.textContent = hobby;
    hobbies.appendChild(li);
});
