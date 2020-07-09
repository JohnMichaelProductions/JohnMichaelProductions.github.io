window.onload = function() 
{
    var particles = Particles.init
    ({
        selector: '.background',
        color: ['#5798c9', '#57C975'],
        connectParticles: true,
        responsive: 
        [{
            breakpoint: 1200,
            options: 
            {
                color: ['#5798c9', '#57C975'],
                maxParticles: 80,
                connectParticles: true
            }
        }],
        responsive: 
        [{
            breakpoint: 960,
            options: 
            {
                color: ['#5798c9', '#57C975'],
                maxParticles: 40,
                connectParticles: true
            }
        }],
        responsive: 
        [{
            breakpoint: 800,
            options: 
            {
                color: '#00C9B1',
                maxParticles: 80,
                connectParticles: false
            }
        }],
    });
}