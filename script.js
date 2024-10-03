function showContent(contentId) {
    const contentDiv = document.getElementById('content');
    let content = '';

    switch (contentId) {
        case 'content1':
            content = '<div class="tabcontent"><p class="p2">78p funds life-changing projects</p><p class="p1">That includes ensuring earthquake survivors like Saleh in Syria have food and shelter and empowering the Lihukwa villagers in Zambia.</p></div>';
            break;
        case 'content2':
            content = '<div class="tabcontent2"><p class="p2">22p ensures we can continue to transform lives tomorrow</p><p class="p1">That includes fundraising and support costs, which allows us to make sure your donation has a long-term impact.</p></div>';
            break;

        default:
            content = '';
    }

    contentDiv.innerHTML = content;
}