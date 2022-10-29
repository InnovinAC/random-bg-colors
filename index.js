 $('#button').on('click', () => {
      let color1 = Math.floor(Math.random() * 255)
      let color2 = Math.floor(Math.random() * 255)
      let color3 = Math.floor(Math.random() * 255)
      let new_bg = `rgb(${color1}, ${color2}, ${color3})`
      let colorSum = color1 + color2 + color3
      $('body').css('background-color', new_bg)
      $('#h2').text(new_bg)
      if(colorSum < 250) {
         $('#h2').css('color', '#fff')
      }
      else {
         $('#h2').css('color', '#000')
      }
   })
