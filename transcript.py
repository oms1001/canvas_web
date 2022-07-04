coordenadas_array = []
coordenadas_limpio = []
coordenadas_x = []
coordenadas_y = []

with open('coordinates.txt') as my_file:
    for line in my_file:
        coordenadas_array.append(line)
    print(coordenadas_array)
    i = 0 
    for coord in coordenadas_array:
        coordenada = coordenadas_array[i][:-3]
        primer_valor = coordenada.split(",",1)[0][1:].split(".",1)[0]
        coordenadas_x.append(int(primer_valor)*2.5)
        #print(my_string.split("world",1)[1])
        segundo_valor = coordenada.split(",",1)[1].split(".",1)[0]
        coordenadas_y.append((int(segundo_valor)-300)*2.5)
        coordenadas_limpio.append(coordenada)
        
        i += 1

f = open("coord_depurada.txt", "a")


coordenadas_x_limpio = coordenadas_x
coordenadas_y_limpio = coordenadas_y


j = 0
for cor in coordenadas_x_limpio:
    print(f"[{coordenadas_x_limpio[j]},{coordenadas_y_limpio[j]}]")
    f.write(f"[{coordenadas_x_limpio[j]},{coordenadas_y_limpio[j]}],\n")
    j += 1

f.close()