
// Edit the pop-up text here. {item} is replaced with the cake name.
var POPUP_TEXT = "از شما متشکریم که جوجی رو انتخاب کردید! {item} شما به قیمت {price} منتظر آماده شدن است، برای ادامه سفارش خود به ادمین در 09366506937 فقط از طریق پیامک یا به پیج اینستاگرام از طریق دکمه زیر مراجعه کنید.";
var ITEMS = [
    {
        n: "بروکی", d: "ترکیب دوست‌داشتنی براونی و کوکی در یک شیرینی! بافت شکلاتی، مرطوب و غلیظ براونی در کنار لایه کوکی نرم و خوش‌عطر، تجربه‌ای فوق‌العاده از دو دسر محبوب.", i: "images/brookie.jpg"
        , p: "130,000T", options: [
            { label: "یک اسلایس کروکی", p: "130,000T" },
            { label: "قالب کامل", p: "1,200,000T" },
        ]
    },
    { p: "300,000T", n: "کروکی", d: "ترکیبی جذاب از کروسان و کوکی؛ با لایه‌های ترد و طلایی کروسان و خمیر کوکی نرم و شکلاتی درون آن. یک ترکیب متفاوت و خوشمزه برای عاشقان شیرینی و شکلات.", i: "images/crookie.jpg" },
    {
        p: "150,000T", n: "کوکی باکس", d: "چند کوکی خوشمزه که کنار هم در یک ظرف گرد پخته شده‌اند و بافتی نرم و لطیف دارند؛ همراه با فیلینگ شکلاتی خوشمزه در میان کوکی‌ها. انتخابی عالی برای اشتراک‌گذاری و لذت بردن از یک دسر شکلاتی.", i: "images/cookie-box.jpg"
        , options: [
            { label: "کوکی باکس کوچک", p: "150,000T" },
            { label: "کوکی باکس متوسط", p: "300,000T" },
            { label: "کوکی باکس بزرگ", p: "500,000T" },
        ]
    },
    { p: "90,000T", n: "کوکی کلاسیک", d: "یک کوکی بزرگ و دست‌ساز ۸۰ گرمی با بافتی نرم و لطیف در مرکز، لبه‌هایی کمی ترد و تکه‌های شکلات خوشمزه؛ انتخابی کلاسیک برای تمام عاشقان کوکی", i: "images/cookie.jpg" },
    { p: "60,000T", n: "کوکی تبلت ", d: "ک کوکی بزرگ و جذاب با ظاهری شبیه شکلات تخته‌ای؛ ترکیبی از خمیر کوکی خوش‌عطر و تکه‌های شکلات که هر تکه آن یک لقمه خوشمزه و دلچسب است.", i: "images/cookie-dough-chocolate-bars.jpg" },
    { p: "250,000T", n: "کوکی فرایز", d: "کوکی‌هایی با ظاهری شبیه سیب‌زمینی سرخ‌کرده! برش‌های باریک و جذاب از خمیر کوکی با بافتی ترد در لبه‌ها و نرم در مرکز؛ یک میان‌وعده متفاوت و سرگرم‌کننده.", i: "images/cookie-sticks.jpg" },
    { p: "15,000T", n: "بیسکوییت کره یی", d: "بیسکوییت‌های دست‌ساز با عطر دلنشین کره و بافتی لطیف، ترد و شکننده که در دهان آب می‌شوند. شیرینی ملایم و طعم کلاسیک کره، این بیسکوییت را به انتخابی خوشمزه برای همراهی با چای و قهوه تبدیل می‌کند.", i: "images/gingerbread-cookies.jpg" },
    { p: "100,000T", n: "رول دارچین", d: "خمیری نرم، لطیف و پف‌دار با لایه‌هایی از کره، شکر قهوه‌ای و دارچین معطر که پس از پخت با روکش کرمی و لطیف تکمیل می‌شود", i: "images/cinnamon-roll.jpg" },
    { p: "45,000T", n: "کاپ کیک", d: "کاپ‌کیک‌های دست‌ساز با بافتی نرم، لطیف و اسفنجی؛ در دو طعم کلاسیک وانیلی با عطر دلنشین وانیل و شکلاتی با طعم غنی کاکائو. انتخابی خوشمزه و دوست‌داشتنی برای عاشقان کیک‌های کوچک و خوش‌عطر", i: "images/gingerbread-cupcakes.jpg" },
    {
        p: "170,000T", n: "ماتیلدا شکلاتی", d: "کیک شکلاتی لطیف و مرطوب با لایه‌هایی از کیک کاکائویی غنی، فیلینگ و روکش گاناش شکلاتی مخملی و غلیظ. ترکیبی عمیق از طعم شکلات و بافتی نرم و دلنشین؛ انتخابی فوق‌العاده برای عاشقان شکلات.", i: "images/chocolate-cake.jpg"
        , options: [
            { label: "یک اسلایس", p: "170,000T" },
            { label: "قالب کامل", p: "1,650,000T" },
        ]
    },
    {
        p: "120,000T", n: "براونی و بلوندی", d: "مجموعه‌ای از شیرینی‌های خوشمزه با بافتی متراکم، نرم و کمی مرطوب؛ براونی با طعم غنی و عمیق شکلات و بلوندی با طعم شیرین و کاراملی و عطر دلنشین کره تهیه می‌شود. تنوعی از طعم‌های جذاب و دوست‌داشتنی که هر لقمه آن تجربه‌ای شیرین و متفاوت است.( ماربل براونی ، بلوندی سیب و دارچین)", i: "images/marble-brownie.jpg"
        , options: [
            { label: "هر اسلایس", p: "120,000T" },
            { label: "قالب کامل", p: "1,200,000T" },
        ]
    },
    {
        p: "250,000T", n: "تیرامیسو", d: "دسر ایتالیایی محبوب با لایه‌هایی از لیدی‌فینگر آغشته به قهوه، کرم لطیف و خامه‌ای ماسکارپونه و روکشی از پودر کاکائو. ترکیبی متعادل از عطر قهوه، لطافت خامه و طعم دلنشین کاکائو؛ یک دسر کلاسیک و خوش‌طعم برای لحظات شیرین شما.", i: "images/tiramisu.jpg"
        , options: [
            { label: "تک نفره", p: "250,000T" },
            { label: "دو نفره", p: "350,000T" },
        ]
    },
];
// Show prices as "130,000T" -> "۱۳۰٬۰۰۰ تومان". Set to false to keep English digits.
var PERSIAN_DIGITS = true;
function fmt(p) {
    var s = String(p).replace(/T$/i, "");
    if (PERSIAN_DIGITS) s = s.replace(/\d/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹"[d]; }).replace(/,/g, "٬");
    return s + " تومان";
}
var grid = document.getElementById("grid"), ov = document.getElementById("ov"), last = null;
if (grid) ITEMS.forEach(function (it, idx) {
    var el = document.createElement("article");
    el.className = "card";
    el.lang = "fa";
    var chosen = it.options ? it.options[0] : null;   // currently selected option
    var name = it.n.trim();

    var optsHTML = "";
    if (it.options) {
        optsHTML = '<div class="opts" role="radiogroup" aria-label="انتخاب ' + name + '">' +
            it.options.map(function (o, k) {
                return '<label class="opt"><input type="radio" name="opt' + idx + '" value="' + k + '"' +
                    (k === 0 ? ' checked' : '') + '><span>' + o.label + '</span></label>';
            }).join("") + '</div>';
    }

    el.innerHTML =
        '<div class="card-pic"><img alt="' + name + '" src="' + it.i + '" loading="lazy"></div>' +
        '<div class="card-body">' +
        '<h2 class="card-name">' + name + '</h2>' +
        '<p class="card-desc">' + it.d + '</p>' +
        optsHTML +
        '<div class="card-foot"><span class="card-price">' + fmt(chosen ? chosen.p : it.p) + '</span>' +
        '<button class="chickbtn" aria-label="سفارش ' + name + '"><span class="cloud">سفارش</span>' +
        '<svg class="c" viewBox="0 0 100 100"><use href="#chick"/></svg></button></div>' +
        '</div>';

    var priceEl = el.querySelector(".card-price");
    el.querySelectorAll('input[type="radio"]').forEach(function (r) {
        r.addEventListener("change", function () {
            chosen = it.options[r.value];
            priceEl.textContent = fmt(chosen.p);
        });
    });

    el.querySelector("button").onclick = function (e) {
        last = e.currentTarget;
        var title = name + (chosen ? " (" + chosen.label + ")" : "");
        var cost = chosen ? chosen.p : it.p;
        document.getElementById("mt").textContent = title;
        document.getElementById("mp").textContent =
            POPUP_TEXT.replace("{item}", title).replace("{price}", fmt(cost));
        ov.classList.add("open");
        document.getElementById("ok").focus();
    };
    grid.appendChild(el);
});
function shut() { ov.classList.remove("open"); if (last) last.focus() }
if (ov) {
    document.getElementById("x").onclick = shut; document.getElementById("ok").onclick = shut;
    ov.onclick = function (e) { if (e.target === ov) shut() };
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") shut() });
}

