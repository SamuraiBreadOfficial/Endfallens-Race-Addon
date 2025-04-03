execute if entity @a[tag=race_elven] run effect @a[tag=race_elven] speed 1 0 true
execute if entity @a[tag=nightvision_on] run clear @a[tag=nightvision_on] race:elf_nightvission_off
execute if entity @a[tag=nightvision_on] run effect @a[tag=nightvision_on] night_vision 14 0 true
execute if entity @a[tag=nightvision_off] run clear @a[tag=nightvision_off] race:elf_nightvission_on
replaceitem entity @a[tag=race_elven,hasitem={item=diamond_chestplate, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 race:elves_chestplate
replaceitem entity @a[tag=race_elven,hasitem={item=diamond_leggings, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 race:elves_leggings
replaceitem entity @a[tag=race_elven,hasitem={item=diamond_boots, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 race:elves_boots
