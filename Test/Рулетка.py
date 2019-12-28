counter=0
bullets=[1,2,3,4,5,6]

print("Вас приветствует игра Русская рулетка! Готовы крутить барабан? 1 - Продолжить, 0 - Выйти")
PlayOrNot=int(input())

if PlayOrNot==0:
    quit()

import random

for i in range(6):
    print("Крутить барабан? 1 - да, 2 - нет")
    roll=int(input())
    if roll==1:
        bullet=random.choice(bullets)
        if bullet==1:
            print("Вы проиграли! Пуля была в ячейке под номером "+str(bullets.index(bullet)),end='.')
            break
        elif bullet>=2 and bullet<=6:
            counter+=1
        if counter<=1:
            print("Надо же! Вы пережили свою "+str(counter)+" попытку.Ячейка в барабане - "+str(bullets.index(bullet)), end='.')
        elif counter>1 and counter<=4:
            print("Надо же! Вы пережили уже "+str(counter)+" попытки.Ячейка в барабане - "+str(bullets.index(bullet)), end='.')
        elif counter==5:
            print("Надо же! Вы пережили уже "+str(counter)+" попыток. Ячейка в барабане - "+str(bullets.index(bullet)), end='.')
        elif counter==6:
            print("Поздравляю! Вы победили пережив 6 попыток!")
    else:
        print("Вы сдались, но вы все еще целы. Игра окончена.")
        break
