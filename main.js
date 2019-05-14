let paraNumber = 0

const sentences = [
    { copy: `I am a self-taught junior web developer looking for the opportunity to build <span class="useful">useful</span>, <span class="beautiful">beautiful</span> web products fit for the future.`},
    { copy: "I am looking for my first front-end developer job this spring." },
    { copy: "I used to work in events management but now I build websites!" },
]

const nextButton = document.querySelector(".js-and-sign")
const paragraphTag = document.querySelector(".js-paragraph")

const updateTag = function () {
    paragraphTag.innerHTML = sentences[paraNumber].copy
}

const next = function() {
    paraNumber = paraNumber + 1

    if(paraNumber > sentences.length - 1) {
        paraNumber = 0
    } 
    updateTag()    
    console.log(paraNumber)
}

nextButton.addEventListener("click", function() {
    next()    
})

