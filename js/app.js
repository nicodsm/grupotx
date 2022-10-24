document.addEventListener('DOMContentLoaded', ()=> {
    const btnHome      = document.querySelector('#home');
    const btnNosotros  = document.querySelector('#nosotros');
    const btnServicios = document.querySelector('#servicios');

    const pHome = document.querySelector('.pHome');
    const pServicios = document.querySelector('.pServicios');
    const pNosotros = document.querySelector('.pNosotros');

    const sectionHome      = document.querySelector('#sectionHome');
    const sectionServicios = document.querySelector('#sectionServicios');
    const sectionNosotros  = document.querySelector('#sectionNosotros');

    document.addEventListener('click', (e)=>{
        
        if(e.target.id === 'servicios') {

            if(sectionHome.classList.contains('active')){

                sectionHome.classList.remove('active');
                sectionNosotros.classList.remove('active');
                sectionServicios.classList.add('active');
    
                btnHome.classList.add('right');
                btnHome.classList.remove('left');
    
                btnHome.style.width = '100vw';
    
                pServicios.style.opacity = '0'
                pHome.style.opacity = '0'
                pNosotros.style.opacity = '0'
    
                setTimeout(() => {
                    btnHome.style.right = '0';
                    btnHome.style.left = 'unset';
                    btnHome.style.width = '8vw';
                    btnServicios.style.width = '84vw';
                    setTimeout(() => {
                        btnServicios.style.right = '8vw';
                        btnServicios.style.left = 'unset';
                        btnServicios.style.width = '0vw';
                        setTimeout(() => {
                            pHome.style.opacity = '1'
                            pNosotros.style.opacity = '1'
                        }, 1500);
                    }, 1500);
                }, 1500);

            } else {

                sectionHome.classList.remove('active');
                sectionNosotros.classList.remove('active');
                sectionServicios.classList.add('active');

                pServicios.style.opacity = '0'
                pHome.style.opacity = '0'
                pNosotros.style.opacity = '0'
                // nosotros activo
                btnNosotros.style.width = '84vw';

                setTimeout(() => {
                    btnNosotros.style.left = '0';
                    btnNosotros.style.right = 'unset';
                    btnNosotros.style.width = '8vw';

                    btnServicios.style.width = '84vw';

                    setTimeout(() => {
                        btnServicios.style.left = '8vw';
                        btnServicios.style.right = 'unset';

                        btnServicios.style.width = '0';

                        setTimeout(() => {
                            pServicios.style.opacity = '0'
                            pHome.style.opacity = '1'
                            pNosotros.style.opacity = '1'
                        }, 1500);
                    }, 1500);
                }, 1500);
            }

        }

        if(e.target.id === 'home') {

            if(sectionServicios.classList.contains('active')) {

                sectionHome.classList.add('active');
                sectionNosotros.classList.remove('active');
                sectionServicios.classList.remove('active');
    
                btnHome.classList.add('left');
                btnHome.classList.remove('right');
    
                pServicios.style.opacity = '0'
                pHome.style.opacity = '0'
                pNosotros.style.opacity = '0'
    
                btnServicios.style.width = '84vw';
    
                setTimeout(() => {
                    btnHome.style.width = '84vw';
    
                    
                    btnServicios.style.left = '8vw';
                    btnServicios.style.right = 'unset'
    
                    btnServicios.style.width = '8vw';
    
    
                    setTimeout(() => {
                        btnHome.style.left = '8vw';
                        btnHome.style.right = 'unset'
                        btnHome.style.width = '0vw';
    
                        setTimeout(() => {
                            pServicios.style.opacity = '1'
                            pNosotros.style.opacity = '1'
                        }, 1500);
                    }, 1500);
                }, 1500);
            } else {
                // nosotros activo
                sectionHome.classList.add('active');
                sectionNosotros.classList.remove('active');
                sectionServicios.classList.remove('active');


                pServicios.style.opacity = '0'
                pNosotros.style.opacity = '0'
                pHome.style.opacity = '0'

                btnNosotros.style.width = '84vw';

                setTimeout(() => {
                    btnNosotros.style.left = '0';
                    btnNosotros.style.right = 'unset';
                    btnNosotros.style.width = '8vw';

                    btnServicios.style.width = '84vw';

                    setTimeout(() => {
                        btnServicios.style.left = '8vw';
                        btnServicios.style.right = 'unset'
                        btnServicios.style.width = '8vw';

                        btnHome.style.width = '84vw';
                        setTimeout(() => {
                            btnHome.style.left = '8vw';
                            btnHome.style.right = 'unset';
                            btnHome.style.width = '0';

                            setTimeout(() => {
                                pServicios.style.opacity = '1'
                                pNosotros.style.opacity = '1'
                                pHome.style.opacity = '0'
                                
                            }, 1500);
                        }, 1500);
                    }, 1500);
                }, 1500);
            }


        }

        if(e.target.id === 'nosotros') {

            if(sectionHome.classList.contains('active')) {
                
                sectionHome.classList.remove('active');
                sectionNosotros.classList.add('active');
                sectionServicios.classList.remove('active');
    
                pServicios.style.opacity = '0'
                pHome.style.opacity = '0'
                pNosotros.style.opacity = '0'
    
                btnHome.style.width = '100vw';
    
                setTimeout(() => {
                    btnHome.style.left = 'unset';
                    btnHome.style.right = '0';
                    btnHome.style.width = '8vw';
    
                    btnServicios.style.width = '84vw';
    
                    setTimeout(() => {
                        btnServicios.style.left = 'unset';
                        btnServicios.style.right = '8vw';
                        btnServicios.style.width = '8vw';
    
                        btnNosotros.style.width = '84vw';
    
                        setTimeout(() => {
                            btnNosotros.style.left = 'unset';
                            btnNosotros.style.right = '16vw';
                            btnNosotros.style.width = '0';
    
                            setTimeout(() => {
                                pHome.style.opacity = '1';
                                pServicios.style.opacity = '1';
                            }, 1500);
                        }, 1500);
                    }, 1500);
                }, 1500);
            } else {
                // servicios activo
                sectionHome.classList.remove('active');
                sectionNosotros.classList.add('active');
                sectionServicios.classList.remove('active');

                pServicios.style.opacity = '0'
                pHome.style.opacity = '0'
                pNosotros.style.opacity = '0'

                btnServicios.style.width = '84vw';

                setTimeout(() => {
                    btnServicios.style.left = 'unset';
                    btnServicios.style.right = '8vw';

                    btnServicios.style.width = '8vw';

                    btnNosotros.style.width = '84vw';

                    setTimeout(() => {
                        btnNosotros.style.left = 'unset';
                        btnNosotros.style.right = '16vw';

                        btnNosotros.style.width = '0';

                        setTimeout(() => {

                            pServicios.style.opacity = '1'
                            pHome.style.opacity = '1'
                            pNosotros.style.opacity = '0'
                            
                        }, 1500);
                    }, 1500);
                }, 1500);

            }


        }
    })
})