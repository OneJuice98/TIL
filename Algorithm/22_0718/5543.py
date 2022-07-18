### 상근날드 #5543

menus_ham = []
menus_drink = []
for i in range(5):
    if i < 3:
        menus_ham.append(int(input()))
    else:
        menus_drink.append(int(input()))

print(min(menus_ham) + min(menus_drink)-50)
                           