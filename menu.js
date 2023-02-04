fetch('./menu.json?v=2')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        Object.values(data.week).forEach((deys, i) => {
            if (deys) {
                let ul = document.createElement('ul')
                ul.className = 'menu-cont';

                let ol = document.createElement('ol')
                ol.textContent = `${Object.keys(data.week)[i]}`

                Object.values(deys).forEach(dey => {
                    if (dey) {
                        let li = document.createElement('li')
                        li.textContent = `${dey}`
                        ul.appendChild(li)
                        setTimeout(() => {
                            document.querySelectorAll('.menu-cont')[i].style.display = 'flex'
                        }, 100);
                    }
                })

                ul.appendChild(ol)
                document.querySelector('.container').appendChild(ul)
            }
        })
    })

