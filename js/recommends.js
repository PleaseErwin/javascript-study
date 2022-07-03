const recommends = [
    {book:"BATMAN UNDER THE RED HOOD"},
    {book:"BATMAN LAST KNIGHT ON EARTH"},
    {book:"BATMAN : URBAN LEGENDS"},
    {book:"BATMAN THE DARK KNIGHT RETURNS"},
    {book:"BATMAN HUSH"}];

const recommend = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysRecommend = recommends[Math.floor(Math.random() * recommends.length)];
recommend.innerText = todaysRecommend.book;

const fanficList = [{link:'https://archiveofourown.org/works/35657686'},
{link:'https://archiveofourown.org/works/27338314/chapters/66795883'},
{link:'https://archiveofourown.org/works/20480720/chapters/48598514'},
{link:'https://archiveofourown.org/works/13839903'}, 
{link:'https://archiveofourown.org/works/36037564'},
{link:'https://archiveofourown.org/works/11484096'},
{link:'https://archiveofourown.org/works/11485518/chapters/25760694'},
{link:'https://archiveofourown.org/works/13593723/chapters/31204365'},
{link:'https://archiveofourown.org/works/12304110/chapters/27970914'},
{link:'https://archiveofourown.org/works/12639630/chapters/28801764'},
{link:'https://archiveofourown.org/works/33976105'},
{link:'https://archiveofourown.org/works/193575'},
{link:'https://archiveofourown.org/works/11943072'},
{link:'https://archiveofourown.org/works/12568920/chapters/28628100'},
{link:'https://archiveofourown.org/works/20911811'},
{link:'https://archiveofourown.org/works/301669/chapters/482974'},
{link:'https://archiveofourown.org/works/6667840'},
{link:'https://archiveofourown.org/works/125504'},
{link:'https://archiveofourown.org/works/25688722'},
{link:'https://archiveofourown.org/works/29981898'},
{link:'https://archiveofourown.org/works/31380614'},
{link:'https://archiveofourown.org/works/4787114'},
{link:'https://archiveofourown.org/works/19031956'},
{link:'https://archiveofourown.org/works/27282331/chapters/66655615'},
{link:'https://archiveofourown.org/works/17673104'},
{link:'https://archiveofourown.org/works/12264420'},
{link:'https://archiveofourown.org/works/12451170'},
{link:'https://archiveofourown.org/works/18942745'},
{link:'https://archiveofourown.org/works/9198536'},
{link:'https://archiveofourown.org/works/10667829'},
{link:'https://archiveofourown.org/works/21421639'},
{link:'https://archiveofourown.org/works/23586910'},
{link:'https://archiveofourown.org/works/11754783'},
{link:'https://archiveofourown.org/works/20177044'},
{link:'https://archiveofourown.org/works/13193916'},
{link:'https://archiveofourown.org/works/18178256'}];

const fanfic = document.querySelector("#fanfic a");

const todaysFanficRecommend = fanficList[Math.floor(Math.random() * fanficList.length)];
fanfic.href = todaysFanficRecommend.link;
fanfic.innerText = todaysFanficRecommend.link;