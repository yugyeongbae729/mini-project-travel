document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('randomBtn');
    const resetButton = document.getElementById('resetButton');
    const initialScreen = document.getElementById('initialScreen');
    const resultScreen = document.getElementById('resultScreen');
    const destinationImage = document.getElementById('destinationImage');
    const destinationName = document.getElementById('destinationName');
    const accommodationLink = document.getElementById('accommodationLink');
    const spotLink = document.getElementById('spotLink');
    const restaurantLink = document.getElementById('restaurantLink');
    

    const destinations = [
        {
            name: "광주 서구",
            image: "./랜덤이미지/광주서구.png",
            accommodation: "./광주광역시/gwangju.html#gwangjuHotel",
            spot: "./광주광역시/gwangju.html#gwangjuSeoLand",
            restaurant: "./광주광역시/gwangju.html#gwangjuSeoMat"
        },
        {
            name: "광주 북구",
            image: "./랜덤이미지/광주북구.png",
            accommodation: "./광주광역시/gwangju.html#gwangjuHotel",
            spot: "./광주광역시/gwangju.html#gwangjuBukLand",
            restaurant: "./광주광역시/gwangju.html#gwangjuBukMat"
        },
        {
            name: "광주 남구",
            image: "./랜덤이미지/광주남구.gif",
            accommodation: "./광주광역시/gwangju.html#gwangjuHotel",
            spot: "./광주광역시/gwangju.html#gwangjuLand",
            restaurant: "./광주광역시/gwangju.html#gwangjuNamMat"
        },
        {
            name: "광주 동구",
            image: "./랜덤이미지/광주동구.png",
            accommodation: "./광주광역시/gwangju.html#gwangjuHotel",
            spot: "./광주광역시/gwangju.html#gwangjuDongLand",
            restaurant: "./광주광역시/gwangju.html#gwangjuDongMat"
        },
        {
            name: "광주 광산구",
            image: "./랜덤이미지/광주광산구.png",
            accommodation: "./광주광역시/gwangju.html#gwangjuHotel",
            spot: "./광주광역시/gwangju.html#gwangjuGwangLand",
            restaurant: "./광주광역시/gwangju.html#gwangjuGwangMat"
        },
        {
            name: "전남 여수",
            image: "./랜덤이미지/여수.png",
            accommodation: "./전라남도/jeollanam.html#여수호텔",
            spot: "./전라남도/jeollanam.html#여수관광",
            restaurant: "./전라남도/jeollanam.html#여수맛집"
        },
        {
            name: "전남 진도",
            image: "./랜덤이미지/진도.png",
            accommodation: "./전라남도/jeollanam.html#진도호텔",
            spot: "./전라남도/jeollanam.html#진도관광",
            restaurant: "./전라남도/jeollanam.html#진도맛집"
        },
        {
            name: "전남 목포",
            image: "./랜덤이미지/목포.png",
            accommodation: "./전라남도/jeollanam.html#목포호텔",
            spot: "./전라남도/jeollanam.html#목포관광",
            restaurant: "./전라남도/jeollanam.html#목포맛집"
        },
        {
            name: "전남 순천",
            image: "./랜덤이미지/순천.png",
            accommodation: "./전라남도/jeollanam.html#순천호텔",
            spot: "./전라남도/jeollanam.html#순천관광",
            restaurant: "./전라남도/jeollanam.html#순천맛집"
        },
        {
            name: "전북 군산",
            image: "./랜덤이미지/군산.png",
            accommodation: "./전라북도/jeollabuk.html#gunsan_hotel",
            spot: "./전라북도/jeollabuk.html#gunsan_trip",
            restaurant: "./전라북도/jeollabuk.html#gunsan_restaurant"
        },
        {
            name: "전북 남원",
            image: "./랜덤이미지/남원.png",
            accommodation: "./전라북도/jeollabuk.html#namwon_hotel",
            spot: "./전라북도/jeollabuk.html#namwon_trip",
            restaurant: "./전라북도/jeollabuk.html#namwon_restaurant"
        },
        {
            name: "전북 전주",
            image: "./랜덤이미지/전주.png",
            accommodation: "./전라북도/jeollabuk.html#jeonju_hotel",
            spot: "./전라북도/jeollabuk.html#jeonju_trip",
            restaurant: "./전라북도/jeollabuk.html#jeonju_restaurant"
        }
        // 나머지 9개의 여행지 데이터를 여기에 추가
    ];

    function getRandomDestination() {
        const randomIndex = Math.floor(Math.random() * destinations.length);
        return destinations[randomIndex];
    }

    function showResultScreen(destination) {
        destinationImage.src = `${destination.image}`;
        destinationName.textContent = destination.name;

        accommodationLink.onclick = () => window.open(destination.accommodation, '_blank');
        spotLink.onclick = () => window.open(destination.spot, '_blank');
        restaurantLink.onclick = () => window.open(destination.restaurant, '_blank');

        initialScreen.style.opacity = 0;
        setTimeout(() => {
            initialScreen.classList.add('hidden');
            resultScreen.classList.remove('hidden');
            resultScreen.style.opacity = 1;

            // 이미지와 버튼들이 순서대로 나타나게 설정
            setTimeout(() => destinationImage.style.opacity = 1, 300);
            setTimeout(() => destinationName.style.opacity = 1, 750);
            setTimeout(() => accommodationLink.style.opacity = 1, 1000);
            setTimeout(() => restaurantLink.style.opacity = 1, 1500);
            setTimeout(() => spotLink.style.opacity = 1, 2000);
            setTimeout(() => resetButton.style.opacity = 1, 2500);
        }, 1000);

        
    }

    function resetToInitialScreen() {
        resultScreen.style.opacity = 0;
        setTimeout(() => {
            resultScreen.classList.add('hidden');
            initialScreen.classList.remove('hidden');
            initialScreen.style.opacity = 1;

            // 요소들의 투명도를 초기화
            destinationImage.style.opacity = 0;
            destinationName.style.opacity = 0;
            accommodationLink.style.opacity = 0;
            spotLink.style.opacity = 0;
            restaurantLink.style.opacity = 0;
            resetButton.style.opacity = 0;
        }, 1000);
    }

    startButton.addEventListener('click', () => {
        const destination = getRandomDestination();
        showResultScreen(destination);
    });

    resetButton.addEventListener('click', resetToInitialScreen);
});
