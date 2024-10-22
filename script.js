const apiUrl = 'https://dragonball-api.com/api/characters';
const outputElement = document.getElementById('output');

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error de red');
        }
        return response.json();
    })
    .then(data => {
        const characters = data.items; // Acceso al array de los personajes 

        characters.forEach(character => {
            const characterContainer = document.createElement('div');

            //Container para cada personaje con su info

            characterContainer.style.border = '1px solid'; 
            characterContainer.style.margin = '10px';
            characterContainer.style.padding = '5px';
            
            const image = document.createElement('img');
            image.src = character.image;
            image.alt = character.name; 
            image.style.width = '100px';

            const nameElement = document.createElement('h2');
            nameElement.textContent = character.name;

            const powerLevelElement = document.createElement('h3');
            powerLevelElement.textContent = `Nivel de poder: ${character.ki}`;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = character.description; 

            // Agrego la imagen, nombre, nivel de poder y descripción al contenedor del personaje

            characterContainer.appendChild(image);
            characterContainer.appendChild(nameElement);
            characterContainer.appendChild(powerLevelElement);
            characterContainer.appendChild(descriptionElement);

            outputElement.appendChild(characterContainer);
        });
    })
    .catch(error => {
        console.error('Error', error);
    });
