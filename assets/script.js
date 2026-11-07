const awards = [
  ['Outstanding Community Contribution Award','Recognising exceptional dedication to improving local lives, neighbourhoods and community connections.'],
  ['Yorkshire Young Achiever Award','Celebrating young people who demonstrate initiative, positive leadership and service to others.'],
  ['Excellence in Volunteering Award','Honouring volunteers whose time, care and commitment make a lasting difference.'],
  ['Community Unity & Inclusion Award','Recognising efforts to build belonging, understanding and equal opportunities across communities.'],
  ['Health & Community Wellbeing Award','Celebrating initiatives that support healthier, happier and more resilient communities.'],
  ['Cultural Heritage & Creative Arts Award','Honouring contributions to music, dance, literature, arts and the preservation of cultural traditions.'],
  ['Excellence in Education & Mentorship Award','Recognising those who inspire learning, develop skills and help others fulfil their potential.'],
  ['Community Sports & Active Living Award','Celebrating inclusive sport, recreation and opportunities for active participation.'],
  ['Green Community Impact Award','Recognising practical action to protect the environment and promote sustainable living.'],
  ['Responsible Business & Community Impact Award','Honouring businesses that contribute positively to local people and communities.'],
  ['Yorkshire Unsung Hero Award','Celebrating someone whose remarkable contribution deserves wider recognition.']
];
const grid=document.getElementById('category-grid');
if(grid){awards.forEach(([title,description],i)=>{const col=document.createElement('div');col.className='col-md-6 col-xl-4';const card=document.createElement('article');card.className='award-card';const number=document.createElement('span');number.className='award-number';number.textContent=String(i+1).padStart(2,'0')+' / 11';const heading=document.createElement('h3');heading.textContent=title;const para=document.createElement('p');para.textContent=description;card.append(number,heading,para);col.append(card);grid.append(col)})}
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('#nav .nav-link,#nav .btn').forEach(link=>link.addEventListener('click',()=>{const nav=document.getElementById('nav');if(nav.classList.contains('show')&&window.bootstrap){bootstrap.Collapse.getOrCreateInstance(nav).hide()}}));
