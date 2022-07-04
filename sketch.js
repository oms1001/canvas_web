let bezierObject
let easing = 0.005
let i = 0
let j = 0
let k = 0
let ida = 1
let ida_2 = 1
let ida_3 = 1
let primer_random = 0.1
let segundo_random = 0.1
let tercer_random = 0.1

function setup() {
  let cnv = createCanvas(1920, 1080)
  p5bezier.initBezier(cnv)
  linea_montana = p5bezier.newBezierObj([
    [345.0,1162.5],
    [375.0,1130.0],
    [357.5,1102.5],
    [335.0,1075.0],
    [337.5,1047.5],
    [310.0,1025.0],
    [277.5,1005.0],
    [230.0,990.0],
    [245.0,962.5],
    [272.5,947.5],
    [262.5,930.0],
    [292.5,907.5],
    [275.0,882.5],
    [277.5,845.0],
    [260.0,815.0],
    [247.5,785.0],
    [232.5,760.0],
    [217.5,735.0],
    [222.5,722.5],
    [220.0,687.5],
    [272.5,675.0],
    [295.0,647.5],
    [295.0,630.0],
    [302.5,617.5],
    [332.5,587.5],
    [370.0,570.0],
    [315.0,562.5],
    [260.0,550.0],
    [227.5,540.0],
    [177.5,535.0],
    [230.0,525.0],
    [247.5,505.0],
    [210.0,480.0],
    [200.0,457.5],
    [160.0,422.5],
    [152.5,395.0],
    [200.0,372.5],
    [215.0,355.0],
    [225.0,335.0],
    [247.5,305.0],
    [270.0,277.5],
    [280.0,255.0],
    [300.0,232.5],
    [262.5,220.0],
    [267.5,205.0],
    [285.0,172.5],
    [337.5,160.0],
    [350.0,145.0],
    [302.5,127.5],
    [265.0,115.0],
    [230.0,100.0],
    [230.0,77.5],
    [280.0,65.0],
    [225.0,55.0],
    [242.5,37.5],
    [247.5,20.0],
    [277.5,2.5],
    [292.5,-10.0],
    [250.0,-25.0],
    [257.5,-35.0],
    [292.5,-42.5],
    [300.0,-65.0],
    [275.0,-82.5],
    [265.0,-105.0],
    [242.5,-125.0],
    [242.5,-145.0],
    [272.5,-162.5],
    [300.0,-185.0],
    [282.5,-205.0],
    [237.5,-227.5],
    [280.0,-247.5],
    [305.0,-270.0],
    [297.5,-310.0],
    [280.0,-330.0],
    [270.0,-350.0],
    [287.5,-375.0],
    [290.0,-392.5],
    [265.0,-410.0],
    [237.5,-427.5],
    [242.5,-447.5],
    [230.0,-467.5],
    [280.0,-487.5],
    [247.5,-510.0],
    [250.0,-532.5],
    [247.5,-557.5],
    [260.0,-587.5],
    [277.5,-605.0],
    [300.0,-632.5],
    [312.5,-662.5],
    [357.5,-680.0],
    [337.5,-697.5],
    [390.0,-715.0],
    [435.0,-742.5],
    
  ], 'OPEN', 2)
  linea_montana_2 = p5bezier.newBezierObj([
    [345.0,1162.5],
    [375.0,1130.0],
    [357.5,1102.5],
    [335.0,1075.0],
    [337.5,1047.5],
    [310.0,1025.0],
    [277.5,1005.0],
    [230.0,990.0],
    [245.0,962.5],
    [272.5,947.5],
    [262.5,930.0],
    [292.5,907.5],
    [275.0,882.5],
    [277.5,845.0],
    [260.0,815.0],
    [247.5,785.0],
    [232.5,760.0],
    [217.5,735.0],
    [222.5,722.5],
    [220.0,687.5],
    [272.5,675.0],
    [295.0,647.5],
    [295.0,630.0],
    [302.5,617.5],
    [332.5,587.5],
    [370.0,570.0],
    [315.0,562.5],
    [260.0,550.0],
    [227.5,540.0],
    [177.5,535.0],
    [230.0,525.0],
    [247.5,505.0],
    [210.0,480.0],
    [200.0,457.5],
    [160.0,422.5],
    [152.5,395.0],
    [200.0,372.5],
    [215.0,355.0],
    [225.0,335.0],
    [247.5,305.0],
    [270.0,277.5],
    [280.0,255.0],
    [300.0,232.5],
    [262.5,220.0],
    [267.5,205.0],
    [285.0,172.5],
    [337.5,160.0],
    [350.0,145.0],
    [302.5,127.5],
    [265.0,115.0],
    [230.0,100.0],
    [230.0,77.5],
    [280.0,65.0],
    [225.0,55.0],
    [242.5,37.5],
    [247.5,20.0],
    [277.5,2.5],
    [292.5,-10.0],
    [250.0,-25.0],
    [257.5,-35.0],
    [292.5,-42.5],
    [300.0,-65.0],
    [275.0,-82.5],
    [265.0,-105.0],
    [242.5,-125.0],
    [242.5,-145.0],
    [272.5,-162.5],
    [300.0,-185.0],
    [282.5,-205.0],
    [237.5,-227.5],
    [280.0,-247.5],
    [305.0,-270.0],
    [297.5,-310.0],
    [280.0,-330.0],
    [270.0,-350.0],
    [287.5,-375.0],
    [290.0,-392.5],
    [265.0,-410.0],
    [237.5,-427.5],
    [242.5,-447.5],
    [230.0,-467.5],
    [280.0,-487.5],
    [247.5,-510.0],
    [250.0,-532.5],
    [247.5,-557.5],
    [260.0,-587.5],
    [277.5,-605.0],
    [300.0,-632.5],
    [312.5,-662.5],
    [357.5,-680.0],
    [337.5,-697.5],
    [390.0,-715.0],
    [435.0,-742.5],
    
  ], 'OPEN', 2)
  loop()
  noFill()

}

function draw() {
  background(255)
  strokeWeight(2)
  stroke(220, 220, 220)
  linea_montana.draw()
  stroke(255, 255, 255)
  strokeWeight(4)
  linea_montana_2.draw()
  // bezierObject.draw()
  primer_random = random(5)
  segundo_random = random(5)
  tercer_random = random(5)

  if (i < 300 && ida === 1){
    i += primer_random
  } else if (i > 0){
    ida = 0
    i -= primer_random
  } else if(i<0){
    ida = 1
  }

  if (j < 700 && ida_2 === 1){
    j += segundo_random
  } else if (j > 0){
    ida_2 = 0
    j -= segundo_random
  } else if(j<0){
    ida_2 = 1
  }

  if (k < 800 && ida_3 === 1){
    k += segundo_random
  } else if (j > 0){
    ida_3 = 0
    k -= segundo_random
  } else if(j<0){
    ida_3 = 1
  }

  linea_montana.update([
    [345.0,1162.5+j],
    [375.0,1130.0],
    [357.5+i,1102.5],
    [335.0,1075.0],
    [337.5,1047.5+i],
    [310.0,1025.0],
    [277.5,1005.0],
    [230.0+j,990.0],
    [245.0+i,962.5],
    [272.5,947.5],
    [262.5,930.0],
    [292.5,907.5],
    [275.0+k,882.5+i],
    [277.5,845.0],
    [260.0,815.0],
    [247.5,785.0+j],
    [232.5,760.0],
    [217.5,735.0],
    [222.5,722.5],
    [220.0+j,687.5],
    [272.5,675.0],
    [295.0,647.5+k],
    [295.0,630.0],
    [302.5,617.5+i],
    [332.5,587.5],
    [370.0,570.0],
    [315.0,562.5],
    [260.0+i,550.0],
    [227.5,540.0],
    [177.5,535.0],
    [230.0,525.0],
    [247.5,505.0],
    [210.0,480.0],
    [200.0,457.5],
    [160.0,422.5],
    [152.5,395.0],
    [200.0+k,372.5],
    [215.0,355.0+j],
    [225.0,335.0],
    [247.5,305.0],
    [270.0+j,277.5],
    [280.0,255.0],
    [300.0,232.5+i],
    [262.5,220.0],
    [267.5,205.0],
    [285.0,172.5+j],
    [337.5,160.0],
    [350.0,145.0],
    [302.5,127.5],
    [265.0,115.0],
    [230.0,100.0],
    [230.0,77.5],
    [280.0+i,65.0],
    [225.0,55.0+i],
    [242.5,37.5],
    [247.5+j,20.0],
    [277.5,2.5],
    [292.5+i,-10.0],
    [250.0,-25.0],
    [257.5,-35.0],
    [292.5,-42.5],
    [300.0,-65.0+i],
    [275.0,-82.5],
    [265.0,-105.0],
    [242.5,-125.0],
    [242.5,-145.0],
    [272.5+i,-162.5],
    [300.0,-185.0],
    [282.5,-205.0],
    [237.5,-227.5],
    [280.0,-247.5+i],
    [305.0,-270.0],
    [297.5,-310.0],
    [280.0,-330.0],
    [270.0,-350.0],
    [287.5,-375.0],
    [290.0+i,-392.5],
    [265.0,-410.0],
    [237.5,-427.5],
    [242.5,-447.5+j],
    [230.0,-467.5],
    [280.0,-487.5+i],
    [247.5,-510.0],
    [250.0,-532.5],
    [247.5,-557.5],
    [260.0,-587.5],
    [277.5,-605.0],
    [300.0,-632.5],
    [312.5,-662.5+i],
    [357.5,-680.0],
    [337.5+j,-697.5],
    [390.0+i,-715.0],
    [435.0,-742.5],    
  ])

  linea_montana_2.update([
    [345.0,1162.5],
    [375.0,1130.0],
    [357.5+i,1102.5],
    [335.0,1075.0+j],
    [337.5,1047.5],
    [310.0,1025.0],
    [277.5,1005.0],
    [230.0+j,990.0],
    [245.0,962.5],
    [272.5,947.5+j],
    [262.5,930.0],
    [292.5,907.5],
    [275.0,882.5],
    [277.5,845.0],
    [260.0,815.0],
    [247.5,785.0],
    [232.5,760.0],
    [217.5,735.0],
    [222.5,722.5+i],
    [220.0,687.5],
    [272.5,675.0],
    [295.0,647.5],
    [295.0,630.0],
    [302.5,617.5],
    [332.5+j,587.5],
    [370.0,570.0],
    [315.0,562.5],
    [260.0,550.0+j],
    [227.5,540.0],
    [177.5,535.0],
    [230.0,525.0],
    [247.5,505.0],
    [210.0+j,480.0],
    [200.0,457.5],
    [160.0,422.5+j],
    [152.5,395.0],
    [200.0,372.5+i],
    [215.0+j,355.0],
    [225.0,335.0+j],
    [247.5,305.0],
    [270.0,277.5],
    [280.0,255.0],
    [300.0+j,232.5],
    [262.5,220.0],
    [267.5,205.0],
    [285.0,172.5],
    [337.5,160.0],
    [350.0,145.0],
    [302.5,127.5+j],
    [265.0,115.0],
    [230.0,100.0],
    [230.0,77.5],
    [280.0,65.0],
    [225.0+j,55.0],
    [242.5,37.5],
    [247.5,20.0+i],
    [277.5,2.5],
    [292.5,-10.0],
    [250.0,-25.0],
    [257.5,-35.0],
    [292.5,-42.5+k],
    [300.0,-65.0],
    [275.0,-82.5],
    [265.0,-105.0],
    [242.5,-125.0],
    [242.5,-145.0],
    [272.5,-162.5],
    [300.0,-185.0],
    [282.5,-205.0],
    [237.5+k,-227.5],
    [280.0,-247.5],
    [305.0,-270.0+k],
    [297.5,-310.0+i],
    [280.0+k,-330.0],
    [270.0+k,-350.0],
    [287.5+k,-375.0+k],
    [290.0+k,-392.5],
    [265.0,-410.0],
    [237.5,-427.5+k],
    [242.5,-447.5],
    [230.0,-467.5+k],
    [280.0,-487.5],
    [247.5,-510.0],
    [250.0,-532.5],
    [247.5,-557.5],
    [260.0+k,-587.5],
    [277.5,-605.0],
    [300.0,-632.5],
    [312.5,-662.5+i],
    [357.5,-680.0],
    [337.5,-697.5],
    [390.0,-715.0+i],
    [435.0,-742.5],
  ])
}
