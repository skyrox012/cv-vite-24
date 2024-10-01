import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1></h1>
`;

 // Code JavaScript pour charger le JSON
        fetch('cv.json') // Assure-toi que cv.json est dans le même dossier
            .then(response => response.json())
            .then(data => {
              

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
            })
            .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
