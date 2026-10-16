function scrollTo_(position, duration){
    let $htmlBody = $('html');
    let obj = {scrollTop: position };
    $htmlBody.animate(obj , duration);

}// end scrollTo

function L10nHousefy(string) {
    return( (typeof string !== 'string')
        ? ''
        : string.replace(
            /l10n(\s|<br>)house/gi
            ,`
                <span style="
                    color: var(--my-green);
                    font-weight: 500;
                ">
                    L10n
                </span>
                <span style="
                    color: var(--my-orange);
                    font-weight: 500;
                ">
                    House
                </span>
            `
        )
    );
}// end L10nHousefy

function nav_scroll(){
    if($window.scrollTop() > 10){
        $nav.addClass('scrolled');
        $nav_arrow.addClass('scrolled');
    }// end if
    else{
        $nav.removeClass('scrolled');
        $nav_arrow.removeClass('scrolled');
    }// end else

}// end nav_scroll

function nav_updateActiveLinks() {
    positions = {
        home: $('#Home').offset().top,
        about: $('#About').offset().top,
        service: $('#Service').offset().top,
        video: $('#Video').offset().top,
        whyUs: $('#WhyUs').offset().top,
        language: $('#Language').offset().top,
        contact: $('#Contact').offset().top
    };// end positions

    let currentPosition = $window.scrollTop();

    let activeIndex;

    if (currentPosition < positions.about)
        activeIndex = 0;
    else if (currentPosition < positions.service)
        activeIndex = 1;
    else if (currentPosition < positions.whyUs)
        activeIndex = 2;
    else if (currentPosition < positions.language)
        activeIndex = 3;
    else if (currentPosition < positions.contact)
        activeIndex = 4;
    else
        activeIndex = 5;

    $nav_mobileLinks.find('a').removeClass('active');
    $nav_links.find('a').removeClass('active');
    $nav_mobileLinks.find('a').eq(activeIndex).addClass('active');
    $nav_links.find('a').eq(activeIndex).addClass('active');
}// end nav_updateActiveLinks

function about_generate(){
    let text = L10nHousefy(`
        Located in the heart of dynamic Egypt, L10N House is a fast-growing company fully equipped to fulfil
        your translation and localization requirements, whatever the size and scope of your project.
        Our personalized approach that reflects our passion and uncompromising commitment to every
        client has seen us enjoy constant and steady growth. We pride ourselves on our reputation
        for QUALITY, DEPENDABILITY, SPEED, and CONFIDENTIALITY - ensuring we deliver first-rate
        projects on time and on budget, every time. Our reputation is built on delivering reliable,
        accurate projects on time and on budget. Our 24/7 customer service allows us to solve your
        problems in real time with a fast turn-around. L10N House takes the stress out of the language
        translation and localization process by providing fast, high-quality service for every piece of
        communication you need translated - in any language, for any type of content.
    `);
    $('#About .about-content p').html(text);
}// end about_generate

function services_generateCards(){
    let titles = [
        'Translation and Localization',
        'Desktop Publishing',
        'Localization Engineering',
        'Voice Over and Dubbing'
    ];
    let messeges = [
        `
            Whether you need a single page document translated
            or an entire localization project managed,
            L10N House has the tools and expertise to make it happen...
        `,`
            We offers DTP, design and typesetting services in connection with
            translation or localization projects. Solid typography with modern,
            perfect layout...
        `,`
            Our engineers are experts and equipped with the
            needed skills to meet your demands of conversions,
            software localization, website localization...
        `,`
            It doesn’t matter if it’s a documentary,
            Educational videos dubbing, television,
            or some menu options...When you need voice work done we are here...
        `
    ];
    for(let i = 0; i < 2; i++){
        let $row = $('#Service .container .row').eq(i);
        for(let j = 0; j < 2; j++){
            let index = (i * 2) + j;
            let animation = index % 2 == 0 ? 'animate__slideInLeft' : 'animate__slideInRight';
            let serviceCardsContent = `
                <img src="./assets/imgs/services/s${index+1}.png" alt="" width="75px">
                <h4>${titles[index]}</h4>
                <p>
                    ${messeges[index]} <span>Read More</span>
                </p>
            `;
            $row.append(`
                <div class="col-12 col-lg-6">
                    <div class="service-card wow ${animation}">
                        ${serviceCardsContent}
                    </div>
                </div>
            `);
        }
    }
}// end services_generateCards

function service_openPopup(event){
    const $card = $(event.currentTarget).parents('.service-card');
    const index = $('#Service .service-card').index($card);
    service_buildPopup(index);
    let $popup = $('#Service .popup');
    $popup.addClass('active');
}// end service_openPopup

function service_closePopup(){
    let $popup = $('#Service .popup');
    $popup.removeClass('active');
}// end service_closePopup

function service_buildPopup(index){
    let $popup = $('#Service .popup');
    let titles = [
        `Translation and Localization`,
        `Desktop Publishing`,
        `Localization Engineering`,
        `Voice Over and Dubbing`
    ];

    let paragraphs = [
        `
            Whether you need a single page document translated or an entire localization project managed,
            L10N House has the tools and expertise to make it happen. Our team provides a fast and efficient
            service across a range of sectors using state-of-the-art technology. Our accurate texts fit seamlessly
            into their target markets. L10N House is more than a basic word-for-word translation service
            (Although we provide that service if that is what you need).
            Each project is tailored to the local culture and phrasing, so
            your target audience can instantly grasp the intended meaning.
            This is known as localization. Choosing the target language for
            translation is just the first step. Our specialty is ensuring the
            right 'frequency' to reach your target audience. L10N House employs a
            pool of specialized translators from a wide variety of industry backgrounds to help you achieve just that.
        `,
        `
            L10N House offers DTP, design, and typesetting services for all translation
            and localization projects. Solid typography with a modern, flawless layout
            ensures your material will be a joy to explore! These two elements work together
            to deliver the best possible readability. We create your electronic files in the
            target language of your choice while maintaining the meaning, style, and tone of
            the original document. In addition to good planning, the outsourcing of product
            information production requires the prior and precise definition
        `,
        `
            L10N House is a one-stop-shop for all your translation, editing,
            engineering, and testing needs. Our highly qualified engineers are
            equipped with the skills and knowledge to meet all your conversion,
            software localization, website localization, and graphic editing
            requirements. We are able to manage any kind of environment and all
            programming languages, with the necessary tools to ensure a simple and streamlined process.
        `,
        `
            Whether it’s a documentary, educational video, television commercial,
            in-store announcement, or menu options for a phone system, L10N House
            offers a fast and easy way to get your voice work and dubbing projects
            completed on time and within budget. We are always happy to recommend
            suitable voices and provide an obligation-free quote for your upcoming
            production. Our team can coordinate your voice-over production from beginning to end,
            answer your technical questions, and ensure all your requirements are met and delivered
            within your deadline. Our engineers will ensure your project is recorded and mixed to the
            highest standard and provide bespoke music tracks upon request.
        `
    ];

    let stepTitles = [
        'The translation process: attention to detail every step of the way',
        'DTP Process: precision and attention to detail',
        '',
        ''
    ];

    let stepses = [
        [
            'Analyze the scope and requirements of the project.',
            'Confirm which linguist best meets the project requirements.',
            'Deliver a proposal that meets the clients budget.',
            'Client approval of the proposal.',
            'Process the files for translation, gather any necessary information, and collate a glossary of specialized terms for client approval.',
            'The completed translation then goes through a process of correction and editing to ensure the final text has the authentic flow, rhythm, and character of the target language.',
            'After the revision and editing phase, we perform a quality assurance (QA) check using advanced QA tools such as ApSIC Xbench to check for any potential errors and ensure the translation is polished and ready for delivery to the client.',
            'Prepare the files for final delivery.',
            'Submit deliverables to the client',
            'Project feedback from the client.',
        ],[
            'Determine the scope of the project, the required software, and the target language characteristics to see if this is supported by the software. We are then able to evaluate the layout complexity.',
            'Assign the project to a desktop publisher proficient in the required software.',
            'Once the actual DTP work is completed, the project goes through the quality control (QC) process and linguistic proofreading.',
            'After the QC and proofreading phases, the project goes through further correction to check for any potential errors and ensure the data is polished and ready to go!'
        ],
        [],
        []
    ];

    let exstraInfoTitles = [
        'QA Procedures:',
        'QA Procedures:',
        'Our engineering services are tailored to your specific needs and include:',
        'Voice over services:',
    ];

    let exstraInfo = [
        [
            'Pre-production support',
            'Localization vendor selection',
            'Language QA spot checks on all deliverables',
            'Linguistic QA on builds',
            'Query handling',
            'Terminology management',
            'Vendor performance assessment'
        ],[
            'Pre-production support',
            'Localization vendor selection',
            'Language QA spot checks on all deliverables',
            'Linguistic QA on builds',
            'Query handling',
            'Terminology management',
            'Vendor performance assessment'
        ],[
            'Conversions',
            'Software localization',
            'E-Learning localization',
            'Flash engineering',
            'Help engineering',
            'Graphics editing'
        ],[
            "Full audio production and ongoing project management support",
            "Time syncing",
            "Lip syncing",
            "Mixing and editing",
            "Voiceover narration",
            "Mixing and editing"
        ]
    ];

    let exsrarParagraph = `
        <div class="exsrar-paragraph">
            L10N House has a large pool of professional talent available, including native-speaking voiceover actors with the expertise and experience to convey your message to both the global marketplace and local communities.
            <br><br>
            Our fully equipped recording studios guarantee the highest quality voiceover production value and on-time delivery of your final files in any format you require.
        </div>
    `;

    $popup.html(`
        <div class="container position-relative">

            <div class="row position-relative">

                <div class="col-12 position-relative m-0">
                    <h6
                        class="text-center"
                        style="
                            font-weight: 700;
                            font-size: 15px;
                        "
                    >services</h6>
                    <i
                        class="fa-solid fa-xmark position-absolute top-0 end-0"
                        style="
                            cursor: pointer;
                            font-size: 14px;
                        "
                        onclick="service_closePopup()"
                    ></i>

                </div><!--.col-12-->
               
                <hr class="mb-3">
               
                <div class="col-12">
                    <h4
                        class='text-center'
                        style='
                            color: var(--my-orange);
                            font-weight: 700;
                        '
                    >${titles[index]}</h4>
                </div><!--.col-->

                <div class="col-12 col-lg-6">

                    <p>
                        ${L10nHousefy(paragraphs[index])}
                    </p>

                </div><!--.col-->

                <div class="col-12 col-lg-6">
                    <img src="./assets/imgs/services/popup${index+1}.jpg" class="img-fluid rounded-3">
                </div><!--.col-->

                <div class="col-12">
                    ${index == 3 ? L10nHousefy(exsrarParagraph) : ''}
                    ${stepTitles[index] == '' ? '': `<h5>${stepTitles[index]}</h5>`}
                    ${stepTitles[index] == '' ? '' : `<div class="steps">${service_popup_getSteps(index, stepses)}</div>`}
                    <h5>${exstraInfoTitles[index]}</h5>

                    <div class="qa-procedures">
                        ${service_popup_getExtraInfo(index, exstraInfo)}
                    </div>

                </div><!--.col-->

            </div><!--.row-->

        </div><!--.container-->
    `);
}// end service_buildPopup

function service_popup_getSteps(index, stepses){
    let steps = stepses[index];
    if(steps === ''){
        return '';
    }
    let result = '';
    for(let i = 0; i < steps.length; i++){
        let step = steps[i];
        result += `
            <p><span>${i+1}.</span> ${step}</p>
        `;
    }
    return result;
}// end service_popup_getSteps

function service_popup_getExtraInfo(index, extraInfo){
    let extraInfoArr = extraInfo[index];
    if(extraInfoArr === ''){
        return '';
    }
    let result = '';
    for(let i = 0; i < extraInfoArr.length; i++){
        let extraInfo = extraInfoArr[i];
        result += `
            <p><span>-</span> ${extraInfo}</p>
        `;
    }
    return result;
}// end service_popup_getExtraInfo

function whyUs_generateCards(){
    let cards = $('#WhyUs [class*=col]');

    let titles = [
        'The Best',
        'Solutions for all your <br> language challenges',
        'Our highly qualified teams'
    ];

    let paragraphs = [
        `
            At L10N House, each employee strives to embrace
            our core values of QUALITY, DEPENDABILITY,
            SPEED, and CONFIDENTIALITY. These values are reflected
            in every service we provide, whether large or small.
        `,`
            Managing the multilingual content that gives a
            voice to your global strategy and brand is accompanied
            by many challenges – from the creation of content and
            its translation into many languages, to electronic publishing
            and printing across many formats. L10N House is your one stop
            solution to overcoming all these problems
            professionally and cost-effectively.
        `,`
            L10N House understands your business. Your own assigned
            linguists, project manager and account manager are dedicated
            to provide outstanding service and deliver your project on
            schedule, within your budget & according to your own specifications.
        `
    ];

    for(let i = 0; i < 3; i++){
        cards.eq(i).html(`
            <div class="
                whyUs-card
                wow animate__flipInY
                w-100 h-100 m-auto
            ">
                <div 
                    class="
                        slidable w-100 h-100 
                        d-flex flex-column
                        justify-content-end
                        align-items-start p-3
                    "
                    style="
                        background-image:
                            linear-gradient(0deg, rgb(30, 32, 34) 0%, transparent 75%),
                            url('./assets/imgs/whyUs/bg${i+1}.jpg');
                    "
                >

                    <div class="title">

                        <h4 class="text-start text-white">
                            ${titles[i]}
                        </h4>

                    </div>

                    <div class="paragraph">

                        <p class="text-start text-white">
                            ${L10nHousefy(paragraphs[i])}
                        </p>

                    </div>

                </div><!--.slidable-->

            </div><!--.whyUs-card-->
        `);
    }
}

function sector_generatePopup(){
    let cols = '';
    let data = [
        "Agriculture/Livestock husbandry",
        "Appliances",
        "Automotive & Trucks",
        "Aviation",
        "Business & Finance",
        "Consumer Electronics",
        "Cosmetics",
        "Documentary",
        "Educational/E-Learning",
        "Food and Beverages industries",
        "Games",
        "IT/Software",
        "Legal/Law",
        "Life Science",
        "Marketing/Advertising",
        "Medical",
        "Oil & Gas",
        "Patents",
        "Pharmaceutical",
        "Retail",
        "Sport",
        "Technical/Technical Documentation",
        "Telecommunication",
        "Tourism/Travel"
    ];

    
    for(let i = 0; i < 24; i++){
        cols += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class='_card'>
                    <div class='img' style='width: 100%; max-width: 70px;'>
                        <img src='./assets/imgs/language/sector-${i+1}.png' class='img-fluid'>
                    </div>
                    <h6 style='font-size: 12px;'>${data[i]}</h6>
                </div>
            </div>
        `;
    }

    $('#Language .sector-popup').html(`
        <div class="container">

            <div class="row">
                <div class="col-12 title">
                    <h5>Sectors</h5>
                    <i class='sector-close fa-solid fa-xmark' onclick="$('#Language .sector-popup').removeClass('active');"></i>
                    <hr>
                </div>
                ${cols}

            </div><!--.row-->

        </div><!--.container-->
    `);
}

function language_generatePopup(){
    let cols = '';
    let data = {
        'MIDDLE EASTERN': [
            'Arabic',
            'Farsi',
            'Hebrew',
            'Kurdish',
            'Turkish'
        ],
        'AFRICAN': [
            'Afrikaans',
            'Akan-Twi',
            'Amharic',
            'Bemba',
            'Chichewa/Nyanja',
            'Ewe',
            'Hausa',
            'Igbo',
            'Kinyarwanda',
            'Kirundi',
            'Lingala',
            'Malagasy',
            'Nigerian Pidgin',
            'Northern Sotho/Sepedi',
            'Oromo',
            'Sesotho/Southern Sotho',
            'Setswana',
            'Shona',
            'Somali',
            'Swahili',
            'Swazi/Swati',
            'Tigrinya',
            'Wolof',
            'Xhosa',
            'Yoruba',
            'Zulu'
        ],
        'SOUTH ASIA': [
            'Bengali',
            'Dari',
            'Gujarati',
            'Hindi',
            'Kannada',
            'Kashmiri',
            'Malayalam',
            'Marathi',
            'Nepali',
            'Oriya',
            'Pashto',
            'Punjabi',
            'Sinhala',
            'Tamil',
            'Telugu',
            'Urdu'
        ],
        'SOUTHEAST ASIA': [
            'Burmese',
            'Hmong',
            'Indonesian',
            'Khmer',
            'Lao',
            'Malay',
            'Tagalog',
            'Thai',
            'Vietnamese'
        ],
        'EAST ASIA': [
            'Simplified Chinese',
            'Chinese',
            'Advanced Chinese',
            'Extra Advanced Chinese',
            'Korean',
            'Japanese'
        ]
    };
    let anotherData = [
        'MIDDLE EASTERN',
        'AFRICAN',
        'SOUTH ASIA',
        'SOUTHEAST ASIA',
        'EAST ASIA'
    ];

    for(let i = 0; i < anotherData.length; i++){
        let languages = '';
        for(let j = 0; j < data[anotherData[i]].length; j++){
            languages += `
                <div class='d-flex gap-2'>
                    <i class="far fa-dot-circle"></i>
                    <p>${data[anotherData[i]][j]}</p>
                </div>
            `;
        }
        cols += `
            <h4 class='title'>
                ${anotherData[i]}
            </h4>
            <div class='languages'>
                ${languages}
            </div>
        `;
    }
    $('#Language .language-popup').html(`
        <div class="sidePopup">

            <div class='header'>
                <i class="fa-solid fa-window-close" onclick="$('#Language .language-popup').removeClass('active');"></i>
                <!--<h4>Languages</h4>-->
            </div>

            <div class='body'>
                ${cols}
            </div>

        </div>
    `);
}// end language_generatePopup
