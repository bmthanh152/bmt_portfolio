const block = document.querySelector('.portfolio-container');
console.log(block)
const projects = [
    {
        githubLink: 'https://github.com/bmthanh152/twotown',
        imgBgProject: 'assets/img/portfolio/twotownbg.png',
        imgProject: 'assets/img/portfolio/twotown.png',
        linkDemo: 'http://twotown.infinityfreeapp.com/',
        status: 'project'
    },
    {
        githubLink: 'https://github.com/bmthanh152/xemphimhd',
        imgBgProject: 'assets/img/portfolio/xemphimhdbg.png',
        imgProject: 'assets/img/portfolio/xemphimhd.png',
        status: 'team'
    },
    {
        imgBgProject: 'assets/img/portfolio/Faskartbg.png',
        imgProject: 'assets/img/portfolio/Faskart.png',
        githubLink: 'https://bmthanh152.github.io/Fastkart/',
        status: 'team'
    },
    {
        githubLink: 'https://github.com/bmthanh152/quanlythuvien',
        imgBgProject: 'assets/img/portfolio/quanlybansach-bg.png',
        imgProject: 'assets/img/portfolio/quanlybansach.png',
        status: 'team'
    },
    {
        githubLink: 'https://bmthanh152.github.io/musicplayer/',
        imgProject: 'assets/img/portfolio/javascript-music_player.png',
        status: 'project'
    },
]


function render() {
    const htmls = projects.map(project => {
        return `<div class="col-lg-4 col-md-6 portfolio-item filter-${project.status}" >
                    <div class="portfolio-wrap">
                        <img src="${project.imgBgProject || project.imgProject}" class="img-fluid" alt="">
                        <div class="portfolio-links">
                            <a href="${project.imgProject}" data-gallery="portfolioGallery" class="portfolio-lightbox" ><i class="bx bx-plus"></i></a>
                            <a href="${project.linkDemo || project.githubLink}" target="_blank"><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>`
    })
    console.log(htmls.join(''));

    
    return block.innerHTML = htmls.join('');
}


render();