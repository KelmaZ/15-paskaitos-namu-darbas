// const tabs = document.querySelectorAll('.tab')

// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     tabs.forEach(t => t.classList.remove('active'))
//     tab.classList.add('active')
//     setTimeout(() => {
//       tabs.forEach(t => t.querySelector('.content').style.display = 'none');
//       tab.querySelector('.content').style.display = 'block'
//     }, 300)

//     const tabContent = tab.querySelector('.content')
//     const tabText = tabContent.querySelector('p')
//     const tabImage = tabContent.querySelector('img')

//     if (tab.id === 'tab1') {
//       tabText.textContent = 'Šiaurinės pašvaistės yra kitose planetose. Šiaurės pašvaistė nėra būdinga tik Žemės planetai kadangi skirtinguose kosminiuose zonduose buvo rodomi aurorų vaizdai Jupiterio ir Saturno planetose. Šių planetų auroras yra daug įspūdingesnis ir didesnis nei Žemėje, nes magnetiniai laukai šiose planetose yra daug intensyvesni ir galingesni nei Žemėje.';
//       tabImage.src = 'app/images/img-1.jpg'
//       tabImage.alt = 'Pirmas paveikslas'
//     } else if (tab.id === 'tab2') {
//       tabText.textContent = 'Jie geriau atrodo su fotoaparatais. Žmogaus akis negali aptikti šiaurės pašvaistės grožio, Tačiau kameros leidžia fotografuoti, kad būtų galima stebėti įspūdingą šių aurorų gamtą. Pačių kamerų ilgos ekspozicijos nustatymas kartu su giedru ir tamsiu dangumi padeda pamatyti šiaurės pašvaistę visu savo puošnumu.';
//       tabImage.src = 'app/images/img-2.jpg'
//       tabImage.alt = 'Antras paveikslas'
//     } else if (tab.id === 'tab3') {
//       tabText.textContent = 'Juos galima pamatyti iš kosmoso. Įrodyta, kad Šiaurės pašvaistę galima puikiai pamatyti iš kosmoso. Astronautai ir palydovai gali fotografuoti iš Žemės orbitos, rodydami šiaurės pašvaistės dydį. Jei nuotraukos vyksta tamsioje Žemės vietoje, nuotraukos dažniausiai būna nuostabios ir įspūdingos. Tai yra 3 įdomybės, kurias turėtumėte nepamiršti apie Šiaurės pašvaistę, tikras reginys, kuriuo gali mėgautis kai kurie laimingi žmonės planetoje.';
//       tabImage.src = 'app/images/img-3.jpg'
//       tabImage.alt = 'Trečias paveikslas'
//     }
//   })
// })



const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.getAttribute('data-text')
    const buttonImage = button.getAttribute('data-image')

    const tabContent = document.querySelector('.tab.active .content')
    const tabImage = tabContent.querySelector('img')

    tabText.textContent = buttonText
    tabImage.src = buttonImage
    tabImage.alt = buttonText
  })
})

var tabs = document.getElementsByClassName("tab")

    function showTab(id){
        for(var i = 0; i < tabs.length; i++){
            tabs[i].computedStyleMap.display = "none"

        }

        document.getElementById(id).style.display = "block"
    }

// const buttons = document.querySelectorAll('.button')
// const tabs = document.querySelectorAll('.tab')

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Gaukime paspausto mygtuko atributus
//     const buttonText = button.getAttribute('data-text')
//     const buttonImage = button.getAttribute('data-image')
//     const tabId = button.getAttribute('data-tab')

//     // Paslėpkime visus tab'us
//     tabs.forEach(tab => {
//       tab.classList.remove('active')
//     })

//     // Raskime paspaustą tab'ą pagal jo ID
//     const tabToShow = document.getElementById(tabId)
//     tabToShow.classList.add('active')

//     // Nustatykime tab'o turinį
//     const tabText = tabToShow.querySelector('.content p')
//     const tabImage = tabToShow.querySelector('.content img')
//     tabText.textContent = buttonText
//     tabImage.src = buttonImage
//     tabImage.alt = buttonText
//   })
// })