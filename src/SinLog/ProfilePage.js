const ProfilePage = () => {
    let currentLogin = null;

    if (localStorage.getItem("currentLogin")) {
        const currentUser = localStorage.getItem("currentLogin");
        currentLogin = JSON.parse(currentUser);
    }

    return (
        <section class="vh-100 colar" >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
              <div class="card mb-3 tower" >
                <div class="row g-0">
                  <div class="col-md-4 gradient-custom text-center text-white zalma">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" class="img-fluid my-5 xslans"  />
                    <h5>Marie Horwitz</h5>
                    <p>Web Designer</p>
                    <i class="far fa-edit mb-5"></i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-4">
                      <h6>Information</h6>
                      <hr class="mt-0 mb-4"/>
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email</h6>
                          <p class="text-muted">{currentLogin.email}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Name</h6>
                          <p class="text-muted">{currentLogin.userName}</p>
                        </div>
                      </div>
                      <h6>Projects</h6>
                      <hr class="mt-0 mb-4"/>
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Recent</h6>
                          <p class="text-muted">Lorem ipsum</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Most Viewed</h6>
                          <p class="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <div class="d-flex justify-content-start">
                        <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                        <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                        <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    );
};

export default ProfilePage;
