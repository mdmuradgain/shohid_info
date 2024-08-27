function switchLanguage(lang) {
    if (lang === 'en') {
        // English text
        document.querySelector('.b_title').innerHTML = 'Protecting freedom is harder than gaining it. So, the nation must always stay vigilant to protect freedom.';
        document.querySelector('.b_btn').textContent = 'Submit Martyr Information';
        document.querySelector('.sec_1 h1').textContent = 'Martyrs to Date';
        document.querySelector('.sec_2 h1').textContent = 'Injured to Date';
        document.querySelector('.sec_3 h1').textContent = 'Arrested & Missing';
        document.querySelector('.banner_search input').setAttribute('placeholder', 'Search by name, address, or anything else');
        document.querySelector('.section_banner h1').innerHTML = 'List of <span style="color: red;">Martyrs</span> in the Movement';
    } else if (lang === 'bn') {
        // Bangla text
        document.querySelector('.b_title').innerHTML = 'স্বাধীনতা অর্জনের চেয়ে স্বাধীনতা রক্ষা করা <br> কঠিন। তাই স্বাধীনতা রক্ষায় <br> জাতিকে থাকতে হয় সদা জাগ্রত।';
        document.querySelector('.b_btn').textContent = 'শহীদদের তথ্য দিন';
        document.querySelector('.sec_1 h1').textContent = 'এ পর্যন্ত শহীদ';
        document.querySelector('.sec_2 h1').textContent = 'এ পর্যন্ত আহত';
        document.querySelector('.sec_3 h1').textContent = 'গ্রেফতার ও নিখোঁজ';
        document.querySelector('.banner_search input').setAttribute('placeholder', 'নাম, ঠিকানা বা অন্য যেকোনো কিছু দ্বারা অনুসন্ধান করুন');
        document.querySelector('.section_banner h1').innerHTML = 'আন্দোলনে <span style="color: red;">শহীদদের</span>  তালিকা';
    }
}
