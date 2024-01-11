import slugify from "slugify";

let url = new URL(window.location);
let searchParams = new URLSearchParams(url.search);
const getLang = searchParams.get("en");
const getTamil = searchParams.get("ta");
const font = new FontFaceObserver("Catamaran");
if (getLang == "en") {
    const getInput = searchParams.get("name") || "Your Name";
    const random_id = Math.floor(1000 + Math.random() * 9000);
    const basename = "happy-pongal-wish-" + random_id;
    const seo_title = slugify(getInput, {
        replacement: "-",
        remove: /[$*_+~.()'"!\-:@]+/g,
        lower: false,
        strict: false,
    });
    const userInput =
        slugify(getInput, {
            replacement: " ",
            remove: /[*+~.()'"!:@]/g,
            lower: false,
            strict: false,
        }) || "Your Name";
    const pageCatch = encodeURIComponent(seo_title).replace(/%20/g, "-");
    document.getElementById("imgdata").innerHTML = `
    <div class="aspect-w-16 aspect-h-9">
                    <div style="font-family: 'Catamaran', sans-serif;">
                        <canvas
                            class="w-full"
                            id="Canvas"
                            width="1080px"
                            height="1080px"
                        ></canvas>
                    </div>
                </div>
    `;
    document.getElementById("form").innerHTML = `
<form
method="get"
action=${"/?en=en&name=" + pageCatch}
accept-charset="UTF-8"
class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
style="background-color: #94a3b8"
>
<input type="hidden" name="en" value="en" /> 
<div class="relative mt-1">
    <input
        type="text"
        id="name"
        name="name"
        class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm text-lg"
        placeholder="Your Name"
        maxlength="30"
        autocomplete="off"
        required
    />
</div>
<button
    type="submit"
    class="block w-full px-5 py-3 text-lg font-medium text-gray-700 bg-orange-200 rounded-lg"
>
    Create Now
</button>
</form>
`;

    if (window.history.replaceState) {
        window.history.replaceState(null, null, "/?en=en&name=" + pageCatch);
    }

    const word = userInput.replace(/[-]/g, " ");
    document
        .getElementsByTagName("meta")
        .namedItem("description")
        .setAttribute(
            "content",
            `${word} Sending you the Happy Pongal Wishes - Pongal Greetings Wishes images with Name - Happy Pongal.`
        );
    document.title = `${word} Sending you the Happy Pongal Wishes ❤️`;

    const ogImg = `https://images.weserv.nl/?url=https://generate.tamilwords.net/og/og?name=${pageCatch}`;
    const ogMetatag = document.createElement("meta");
    const ogAlt = document.createElement("meta");
    ogMetatag.setAttribute("property", "og:image");
    ogMetatag.setAttribute("content", ogImg);
    ogAlt.setAttribute("property", "og:image:alt");
    ogAlt.setAttribute("content", word);
    document.head.appendChild(ogMetatag);
    document.head.appendChild(ogAlt);

    // eslint-disable-next-line quotes
    const link = document.querySelector('link[rel="canonical"]')
        // eslint-disable-next-line quotes
        ? document.querySelector('link[rel="canonical"]')
        : document.createElement("link");
    const pathname = typeof window !== "undefined" ? window.location.href : "";
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", pathname);
    document.head.appendChild(link);

    font.load().then(function () {
        const imageObj = new Image();
        const canvas = document.getElementById("Canvas");
        const context = canvas.getContext("2d");
        context.font = "700 34px Catamaran";
        imageObj.onload = function () {
            context.textAlign = "center";
            context.drawImage(imageObj, 0, 0, 1080, 1080);
            context.fillStyle = "#e84393";
            context.fillText("- " + word, 600, 900);
            let image = canvas.toDataURL("image/png", 0.5);
            const sharetext = encodeURIComponent(
                word +
                    " Sending You a Happy Pongal Greeting Wishes For You " +
                    window.location.href
            );
            const Whatsappshare =
                "https://api.whatsapp.com/send?text=" + sharetext;
            const Telegramshare =
                "https://telegram.me/share/url?url=" +
                window.location.href +
                "&text=" +
                sharetext;
            if (word == "Your Name") {
                document.getElementById("result").innerHTML = `
            <br>
            <div class="flex flex-wrap mt-4 mb-8 items-center justify-center" style="overflow: auto;" role="group">
            <a target="_blank" href=${Whatsappshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-green-500 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
            👉 Whatsapp
            </a>
            <a target="_blank" href=${Telegramshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-blue-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
            👉 Telegram
            </a>
            </div>`;
            } else {
                document.getElementById("result").innerHTML = `
        <br><div class="flex items-center justify-center"><a class="inline-block px-10 py-3 rounded text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase" href="${image}" download="${basename}">⬇ Download image</a></div>
        `;
            }
        };

        imageObj.setAttribute("crossOrigin", "anonymous");
        imageObj.src = "./happy-pongal-wish-en-2024.png";
    });
} else if (getTamil == "ta") {
    const getInput = searchParams.get("name") || "Your Name";
    const random_id = Math.floor(1000 + Math.random() * 9000);
    const basename = "happy-pongal-wish-" + random_id;
    const seo_title = slugify(getInput, {
        replacement: "-",
        remove: /[$*_+~.()'"!\-:@]+/g,
        lower: false,
        strict: false,
    });
    const userInput =
        slugify(getInput, {
            replacement: " ",
            remove: /[*+~.()'"!:@]/g,
            lower: false,
            strict: false,
        }) || "Your Name";
    const pageCatch = encodeURIComponent(seo_title).replace(/%20/g, "-");
    document.getElementById("imgdata").innerHTML = `
    <div class="aspect-w-16 aspect-h-9">
                    <div style="font-family: 'Catamaran', sans-serif;">
                        <canvas
                            class="w-full"
                            id="Canvas"
                            width="1080px"
                            height="1080px"
                        ></canvas>
                    </div>
                </div>
    `;
    document.getElementById("form").innerHTML = `
<form
method="get"
action=${"/?ta=ta&name=" + pageCatch}
accept-charset="UTF-8"
class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
style="background-color: #94a3b8"
>
<input type="hidden" name="ta" value="ta" /> 
<div class="relative mt-1">
    <input
        type="text"
        id="name"
        name="name"
        class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm text-lg"
        placeholder="Your Name"
        maxlength="30"
        autocomplete="off"
        required
    />
</div>
<button
    type="submit"
    class="block w-full px-5 py-3 text-lg font-medium text-gray-700 bg-orange-200 rounded-lg"
>
    Create Now
</button>
</form>
`;

    if (window.history.replaceState) {
        window.history.replaceState(null, null, "/?ta=ta&name=" + pageCatch);
    }

    const word = userInput.replace(/[-]/g, " ");
    document
        .getElementsByTagName("meta")
        .namedItem("description")
        .setAttribute(
            "content",
            `${word} Sending you the Happy Pongal Wishes - Tamil Greeting image with Name - Happy Pongal.`
        );
    document.title = `${word} Sending you the Happy Pongal Wishes ❤️`;

    const ogImg = `https://images.weserv.nl/?url=https://generate.tamilwords.net/og/og?name=${pageCatch}`;
    const ogMetatag = document.createElement("meta");
    const ogAlt = document.createElement("meta");
    ogMetatag.setAttribute("property", "og:image");
    ogMetatag.setAttribute("content", ogImg);
    ogAlt.setAttribute("property", "og:image:alt");
    ogAlt.setAttribute("content", word);
    document.head.appendChild(ogMetatag);
    document.head.appendChild(ogAlt);

    // eslint-disable-next-line quotes
    const link = document.querySelector('link[rel="canonical"]')
        // eslint-disable-next-line quotes
        ? document.querySelector('link[rel="canonical"]')
        : document.createElement("link");
    const pathname = typeof window !== "undefined" ? window.location.href : "";
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", pathname);
    document.head.appendChild(link);

    font.load().then(function () {
        const imageObj = new Image();
        const canvas = document.getElementById("Canvas");
        const context = canvas.getContext("2d");
        context.font = "700 34px Catamaran";
        imageObj.onload = function () {
            context.textAlign = "center";
            context.drawImage(imageObj, 0, 0, 1080, 1080);
            context.fillStyle = "#e84393";
            context.fillText("- " + word, 600, 900);
            let image = canvas.toDataURL("image/png", 0.5);
            const sharetext = encodeURIComponent(
                word +
                    " Sending You a Happy Pongal Greeting Wishes For You " +
                    window.location.href
            );
            const Whatsappshare =
                "https://api.whatsapp.com/send?text=" + sharetext;
            const Telegramshare =
                "https://telegram.me/share/url?url=" +
                window.location.href +
                "&text=" +
                sharetext;
            if (word == "Your Name") {
                document.getElementById("result").innerHTML = `
                <br>
                <div class="flex flex-wrap mt-4 mb-8 items-center justify-center" style="overflow: auto;" role="group">
                <a target="_blank" href=${Whatsappshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-green-500 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
                👉 Whatsapp
                </a>
                <a target="_blank" href=${Telegramshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-blue-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
                👉 Telegram
                </a>
                </div>`;
            } else {
                document.getElementById("result").innerHTML = `
            <br><div class="flex items-center justify-center"><a class="inline-block px-10 py-3 rounded text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase" href="${image}" download="${basename}">⬇ Download image</a></div>
            `;
            }
        };

        imageObj.setAttribute("crossOrigin", "anonymous");
        imageObj.src = "./happy-pongal-wish-ta-2024.png";
    });
} else {
    const ogImg =
        "https://images.weserv.nl/?url=https://generate.tamilwords.net/og/og?name=Happy-Pongal-Wishes";
    const ogMetatag = document.createElement("meta");
    const ogAlt = document.createElement("meta");
    ogMetatag.setAttribute("property", "og:image");
    ogMetatag.setAttribute("content", ogImg);
    ogAlt.setAttribute("property", "og:image:alt");
    ogAlt.setAttribute("content", "Happy Pongal Wishes");
    document.head.appendChild(ogMetatag);
    document.head.appendChild(ogAlt);
    // eslint-disable-next-line quotes
    const link = document.querySelector('link[rel="canonical"]')
        // eslint-disable-next-line quotes
        ? document.querySelector('link[rel="canonical"]')
        : document.createElement("link");
    const pathname = typeof window !== "undefined" ? window.location.href : "";
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", pathname);
    document.head.appendChild(link);
    (function () {
        var data = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            publisher: {
                "@type": "Organization",
                name: "பொங்கல் கவிதைகள் - Happy Pongal Wishes image with Name",
                url: "https://pongal.tamilwords.net/",
                logo: {
                    "@type": "ImageObject",
                    url: "https://pongal.tamilwords.net/logo.png",
                    width: 72,
                    height: 72,
                },
            },
            url: "https://pongal.tamilwords.net/",
            image: {
                "@type": "ImageObject",
                url: "https://images.weserv.nl/?url=https://generate.tamilwords.net/og/og?name=Happy-pongal",
                width: 1200,
                height: 627,
            },
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://pongal.tamilwords.net/",
            },
            description:
                "Happy Pongal Wishes - Tamil Image with name - Happy Pongal Greeting Wishes image with Name - Happy Pongal Greeting image Generator in Tamil and English.",
        };
        var script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(data);
        document.getElementsByTagName("head")[0].appendChild(script);
    })(document);
    document.getElementById("form").innerHTML = `
    <div
    class="group flex flex-col justify-between rounded-sm bg-white p-8 shadow-xl transition-shadow hover:shadow-lg"
  >
    <div>
      <h2 class="text-3xl font-bold text-indigo-600">இனிய பொங்கல் வாழ்த்துக்கள் 🎊</h2>
      <div class="mt-4 border-t-2 border-indigo-100 pt-2">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500">
          <br>2024 - Happy <b>பொங்கல்</b> Greeting Wishes image with Name Happy Pongal Greeting image Generator in Tamil and English. <br><br> Pongal Wishes in Tamil and Pongal Wishes in English.
          <br>
          <br>
          <hr>
          <br>
          இனிய பொங்கல்<br>
          திருநாள் நல்வாழ்த்துக்கள்<br>
          தை பிறந்தால்<br>
          வழி பிறக்கும்<br>
          உங்கள் வாழ்க்கையில்<br>
          பொங்கும் பொங்கலை போல்<br>
          இன்பம் செல்வம்<br>
          நிம்மதி மற்றும்<br>
          நல்ல உறவுகள்<br>
          அமைந்திட எனது<br>
          <b>இனிப்பான வாழ்த்துக்கள்</b>   
        </p>
        <br>
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500"><b>Happy Pongal Wishes</b> - Tamil Image with name</p>
      </div>
      <div class="flex items-center justify-center mt-4 border-t-2 border-indigo-100 pt-6">
      <img class="w-80" src="/happy-pongal-wish-8407.png" alt="Happy Pongal" loading="lazy">
      </div>
      <div class="px-6 py-4 font-bold flex items-center justify-center">
      <a href="/?en=en&name=Your-Name" class="px-5 py-2 text-sm text-white bg-fuchsia-500 rounded-full">Create Now</a>
      </div>
      <div class="flex items-center justify-center mt-4 pt-2">
      <img class="w-80" src="/happy-pongal-wish-1212.png" alt="Happy Pongal" loading="lazy">
      </div>
      <div class="px-6 py-4 font-bold flex items-center justify-center">
      <a href="/?ta=ta&name=Your-Name" class="px-5 py-2 text-sm text-white bg-sky-600 rounded-full">Create Now</a>
      </div>
    </div>
  
  </div>
  
    <br>

            <div class="border-b border-gray-200 shadow-xl transition-shadow hover:shadow-lg overflow-auto">
                <table class="divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-4 py-5 font-bold p-2 border-b bg-violet-500 text-white">
                             &#169; Happy Pongal Wishes - pongal.tamilwords.net
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-300">
                        <tr class="whitespace-nowrap odd:bg-gray-100 hover:!bg-stone-200">
                            <td class="bg-emerald-100 px-6 py-8 font-bold text-sm">
                             போகியோடு போகியாக <br> மனதில் உள்ள குப்பைகளையும் <br> எரித்து விடுவோம்
                             <br><br>
                             புது வெற்றிகள் <br>
                             புது நம்பிக்கை <br>
                             புது ஆரம்பம் <br>
                             என தன்நம்பிக்கையுடன் <br>
                             இந்த இனிமையான <br>
                             பொங்கல் திருநாளில் <br>
                             உங்கள் வாழ்க்கையில் <br>
                             மகிழ்ச்சி பொங்கட்டும்
                             <br><br>
                             கோபம் 😤 <br>
                             தேவையாற்ற உணர்ச்சி 😫<br>
                             பொறாமை 😏<br>
                             தாழ்வுமனப்பான்மை 😔<br>
                             தீய பழக்கங்கள் 🤑<br>
                             போன்றவற்றை<br>
                             இந்த போகி தினத்தில்<br>
                             கழித்து விட்டு<br>
                             ஓர் புதிய மனிதராய் 😊<br>
                             பொங்கும் பொங்கலை போல் 😉<br>
                             எழுச்சி பெற்று 😎<br>
                             இந்த தை மதத்தை 🌾<br>
                             பொங்கலின் சுவையை போல் 😋<br>
                             ஓர் இனிமையான 💪<br>
                             நல்வாழ்க்கையை<br>
                             தொடங்குவோம் 😇
                             <br><br>
                             Wishing you a <br>
                             harvest of joy and prosperity <br>
                             this Pongal May <br>
                             the warmth of the season <br>
                             fill your home with happiness <br>
                             and the abundance of the <br>
                             harvest brings <br>
                             success in your endeavors
                             <br><br>
                             <p class="text-purple-900">➡ Pongal Kavithai in Tamil</p>
                             <p class="text-purple-900">➡ Happy Pongal Wishes - Tamil Image with name</p>
                             <p class="text-purple-900">➡ 2024 Pongal Wishes Tamil</p>
                             <p class="text-purple-900">➡ 2024 Pongal Wishes Greetings in Tamil and English</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
`;
}
