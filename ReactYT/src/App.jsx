import Card from './components/Card'

const App = () => {

  const jobOpenings = [
     {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Banglore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldoJBfNpyCIpCaHWrByoqq_W6zTY8xXm5AQF2ZCJ4Ew&s=10",
    companyName: "Amazon",
    datePosted: "2 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$60/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBHEXuYnMP_d1Ni4TmQ48wv7G50wFgxh77LUt83lSYg&s=10",
    companyName: "Google",
    datePosted: "1 day ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJANb0XItp3xw1MB-dF4ccHxxCtgDc7auj-nAXlk-vw&s=10",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_-CwxoQcTdL_h0fGDNwtqfo9y18Fu7cE-p9pvCJ23w&s",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$68/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6edJoXHavkBwpG6xCJpgdB1Las2yvu88BWCib0Iz8aQ&s=10",
    companyName: "IBM",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8B1TcHuGgrDXF8o__I_LqtKyJXIHAANU9gK3x9qtHyg&s=10",
    companyName: "Samsung",
    datePosted: "2 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "New Delhi, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGv06Cker_iDNBXwFJWCbg6pJoGzaYY0e9UwBDP2ZhQ&s=10",
    companyName: "Shopify",
    datePosted: "1 day ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$62/hour",
    location: "Ahemdabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBpn4snpTRIUzg_X9WKLKLDQ3YvIX24KWH7fQE2v2JA&s=10",
    companyName: "LinkedIn",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hour",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNfnUfm4hCEi0whSqUza5bDXv-RjIt-D_9SK-mzlGDg&s=10",
    companyName: "Netflix",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Gurugram, India"
  }
  ];




  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} location={elem.location} />
        </div>
      })}
    </div>
  );
}

export default App


