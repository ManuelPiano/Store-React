const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm" >Donas</span>
        <img src="https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS80MjA4NTQ1MDNfNzY5MjgwMjAxNzI5NDEwXzYyNzM3NzE1OTU0NDA3Nzc4OTFfbi53ZWJwP3N0cD1kc3QtanBnX2UzNV9zNjQweDY0MF9zaDAuMDgmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SW1sdFlXZGxYM1Z5YkdkbGJpNDVOakI0T1RZd0xuTmtjaUo5Jl9uY19odD1zY29udGVudC5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTEwJl9uY19vaGM9dTVaMUJPNDFFc3dBWC11a1U2LSZlZG09QVBzMTdDVUJBQUFBJmNjYj03LTUmb2g9MDBfQWZDNlBPVVVyc29ITGROa196MEMtSERrenVIWS1NM01weDlXenhrZmhpd0pndyZvZT02NUNBNkU5QiZfbmNfc2lkPTEwZDEzYiIsImZpbGVuYW1lIjoiU25hcGluc3RhLmFwcF90aHVtYl80MjA4NTQ1MDNfNzY5MjgwMjAxNzI5NDEwXzYyNzM3NzE1OTU0NDA3Nzc4OTFfbi53ZWJwIn0.R9fcZd6zxFrUBYzrf3VPt2DTLuXUy8mIurP59OZZZz4" alt="donuts" />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Chocolate</span>
        <span className="text-lg font-medium">$3</span>
      </p>
    </div>
  )
}

export default Card;
