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