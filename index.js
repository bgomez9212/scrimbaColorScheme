document.getElementById("submit-btn").addEventListener('click', getScheme)

function getScheme(){
    let colorHexSlice = document.getElementById('seed').value.slice(1)
    let colorScheme = document.getElementById('scheme').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHexSlice}&mode=${colorScheme}`)
            .then((response) => response.json())
            .then((data) => {
                let colorsHtml = ''
                let hexHtml = ''
                for (let color of data.colors){
                    colorsHtml += `
                    <div class="color" 
                    style="background-color:${color.hex.value}"
                    id="test"></div>`
                    
                    hexHtml += `           
                    <p class="hexValue">${color.hex.value}</p>`
                }
                document.getElementById('colors').innerHTML = colorsHtml
                document.getElementById('hexValues').innerHTML = hexHtml
                
            });
}

getScheme()