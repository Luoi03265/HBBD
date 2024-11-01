// Lời mở đầu cho bức thư
const contentLetterStartActive = "Hôm nay sinh nhật bạn nào ấy nhỉ??? ";
const mainContentLetter = "Chúc bạn Kim Ngân sinh nhật vui vẻ và vượt qua kì thi với số điểm mong muốn nhé!";

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); // Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/ea83c5393daf425c2af57a711062b1de-removebg-preview.png"; // Đường dẫn hình ảnh

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/ec9013a73d7638dcc2d2b0491750f49b.jpg"; // Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterStartActive = contentLetterStartActive.split("");

document.querySelector(".sticker").addEventListener("click", function () { // Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active");
    setTimeout(() => {
        splitContentLetterStartActive.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index === contentLetterStartActive.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").style.opacity = "1"; 
                        document.querySelector(".recieve").style.transition = ".5s"; 
                    }, 1000);
                }
            }, 50 * index);
        });
    }, 1000);
});

document.querySelector("#mess").addEventListener("change", function () { // Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked) {
        document.querySelector(".content").classList.add("actived");
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index === mainContentLetter.length - 1) {
                    document.querySelector(".img1").style.opacity = "1";
                    document.querySelector(".img1").style.transition = ".5s";
                }
            }, 50 * index);
        });

    } else {
        document.querySelector(".content").classList.remove("actived");
        document.querySelector(".img1").style.opacity = "0";
        document.querySelector(".img1").style.transition = ".5s";
        document.querySelector(".mainContent").innerHTML = "";
    }
});

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").style.bottom = "100%"; // Ẩn phần thư đi
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20); // Tạo hiệu ứng với số lượng ít hơn cho thiết bị nhỏ
            } else {
                createLight(40); // Tạo hiệu ứng với số lượng nhiều hơn cho thiết bị lớn
            }

        }, 500);
    }, 500);
});

// Animation Drop light - Tạo hiệu ứng kim tuyến rơi
const getBackground = document.querySelector(".backgroundParty");
const width = getBackground.offsetWidth;
const height = getBackground.offsetHeight;

function createLight(count) {
    const container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"];

    for (let i = 0; i < count; i++) {
        const randomLeft = Math.floor(Math.random() * width);
        const randomTop = Math.floor(Math.random() * height / 2);
        const color = allDefaultColor[Math.floor(Math.random() * allDefaultColor.length)];
        const blur = Math.floor(Math.random() * blurLv.length);
        const widthEle = Math.floor(Math.random() * 5) + 15;
        const moveTime = Math.floor(Math.random() * 4) + 4;

        const div = document.createElement("div");
        div.classList.add("snow"); // Thêm class "snow" cho phần tử
        div.style.position = "absolute";
        div.style.backgroundColor = color;
        div.style.borderRadius = `${Math.floor(Math.random() * 10 + 10)}px`;

        div.style.height = `${widthEle * Math.floor(Math.random() * 4 + 1)}px`;
        div.style.width = `${widthEle}px`;
        div.style.marginLeft = `${randomLeft}px`;
        div.style.marginTop = `${randomTop}px`;
        div.style.filter = `blur(${blurLv[blur]}px)`;
        div.style.animation = `moveLight ${moveTime}s ease-in-out infinite`;

        container.appendChild(div);
    }
}
