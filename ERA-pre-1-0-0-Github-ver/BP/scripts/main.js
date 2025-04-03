import { world, system, Player } from "@minecraft/server"
import { ActionFormData, MessageFormData, ModalFormData } from "@minecraft/server-ui"

world.afterEvents.itemUse.subscribe((event) => {
    const { source, itemStack } = event
    switch (itemStack.typeId) {
        case "race:music_player":
            music_player.show(source).then(r => {
                switch (r.selection) {
                    case 0:
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_saccharine,location=slot.weapon.offhand}] run playsound mp.saccharine @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_saccharine,location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dSaccharine in 19edo§r\nby: §3Deister Orchestra"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_ward, location=slot.weapon.offhand}] run playsound mp.ward @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_ward, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dWard§r\nby: §3C418"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_wait, location=slot.weapon.offhand}] run playsound mp.wait @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_wait, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dWait§r\nby: §3C418"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_strad, location=slot.weapon.offhand}] run playsound mp.strad @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_strad, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dStrad§r\nby: §3C418"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_stal, location=slot.weapon.offhand}] run playsound mp.stal @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_stal, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dStal§r\nby: §3C418"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_relic, location=slot.weapon.offhand}] run playsound mp.relic @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_relic, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dRelic§r\nby: §3Aaron Cherof"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_precipice, location=slot.weapon.offhand}] run playsound mp.precipice @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_precipice, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dPrecipice§r\nby: §3Aaron Cherof"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_pigstep, location=slot.weapon.offhand}] run playsound mp.pigstep @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_pigstep, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dPigstep§r\nby: §3Lena Raine"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_otherside, location=slot.weapon.offhand}] run playsound mp.otherside @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_otherside, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dOtherside§r\nby: §3Lena Raine"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_mellohi, location=slot.weapon.offhand}] run playsound mp.mellohi @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_mellohi, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dMellohi§r\nby: §3C418"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_mall, location=slot.weapon.offhand}] run playsound mp.mall @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_mall, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dMall§r\nby: §3C418"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_far, location=slot.weapon.offhand}] run playsound mp.far @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_far, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dFar§r\nby: §3C418"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_creator_mb, location=slot.weapon.offhand}] run playsound mp.creator_mb @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_creator_mb, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dCreator ( Music Box Version )§r\nby: §3Lena Raine"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_creator, location=slot.weapon.offhand}] run playsound mp.creator @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_creator, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dCreator§r\nby: §3Lena Raine"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_chirp, location=slot.weapon.offhand}] run playsound mp.chirp @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_chirp, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dChirp§r\nby: §3C418"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_cat, location=slot.weapon.offhand}] run playsound mp.cat @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_cat, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dCat§r\nby: §3C418"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_blocks, location=slot.weapon.offhand}] run playsound mp.blocks @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_blocks, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§dBlocks§r\nby: §3C418"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_5, location=slot.weapon.offhand}] run playsound mp.5 @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_5, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§d5§r\nby: §3Samuel Aberg"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_11, location=slot.weapon.offhand}] run playsound mp.11 @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_11, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§d11§r\nby: §3C418"}]}');

                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_13, location=slot.weapon.offhand}] run playsound mp.13 @a[r=10] ~ ~ ~');
                        event.source.runCommandAsync('execute at @s[hasitem={item=race:mp_13, location=slot.weapon.offhand}] run tellraw @s {"rawtext":[{"text":"§6§l[ Music Player ]§r§a Now Playing§r:\n\n§d13§r\nby: §3C418"}]}');

                        break;

                    case 1:
                        event.source.runCommand('stopsound @s');
                        break;

                    case 2:
                        mp_guide.show(source);
                        break;

                    default:
                        break;
                }
            })
    }
})

world.afterEvents.itemUse.subscribe((event) => {
    const { source, itemStack } = event
    switch (itemStack.typeId) {
        case "race:race_orb":
            racemenu.show(source).then(r => {
                switch (r.selection) {
                    case 0:
                        racemenu_human.show(source).then(r => {
                            switch (r.selection) {
                                case 0:
                                    event.source.runCommand('tellraw @s[tag=race_human] {"rawtext":[{"text":"Race Change Unsuccesful.\n\nYOU ALREADY HAVE THIS RACE!"}]}')
                                    event.source.runCommand('title @s[tag=!race_human] title Race Selected!');
                                    event.source.runCommand('tellraw @s[tag=!race_human] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e Your Race Will Change in:"}]}');
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=!race_human] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 3"}]}'), 20);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=!race_human] ~ ~ ~ 1 1.5 1'), 20);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=!race_human] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 2"}]}'), 40);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=!race_human] ~ ~ ~ 1 1.5 1'), 40);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=!race_human] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 1"}]}'), 60);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=!race_human] ~ ~ ~ 1 1.5 1'), 60);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=!race_human] remove race_elven'), 85);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=!race_human] remove race_dwarf'), 85);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=!race_human] remove race_avian'), 85);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=!race_human] remove nightvision_off'), 85);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=!race_human] remove nightvision_on'), 85);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=!race_human] remove has_wings'), 85);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=!race_human] race:elven_ears'), 85);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=!race_human] race:elven_superjump'), 85);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=!race_human] race:elf_nightvission_off'), 85);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=!race_human] race:elf_nightvission_on'), 85);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=!race_human] race:dwarf_haste'), 85);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=!race_human] race:dwarfs_fury'), 85);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=!race_human] race:super_launch'), 85);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=!race_human] firework_rocket'), 85);
                                    system.runTimeout(() => event.source.runCommand('execute if entity @s[tag=!race_human] run tellraw @a {"rawtext":[{"text":"§e§l"},{"selector":"@s"},{"text":"§r changed his/her race to human!"}]}'), 80);
                                    system.runTimeout(() => event.source.addTag('race_human'), 85);
                                    system.runTimeout(() => event.source.removeTag('race_feline'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s race:feline_helmet'), 84);
                                    system.runTimeout(() => event.source.addTag('is_changing'), 20);
                                    system.runTimeout(() => event.source.removeTag('is_changing'), 84);
                                    system.runTimeout(() => event.source.runCommandAsync('particle race:race_change ~ ~ ~'), 80);


                                    break;

                                case 1:
                            }
                        })
                        break;

                    case 1:
                        racemenu_elf.show(source).then(r => {
                            switch (r.selection) {
                                case 0:
                                    event.source.addTag('race_elven');
                                    event.source.runCommand('title @s[tag=race_elven] title Race Selected!');
                                    event.source.runCommand('tellraw @s[tag=race_elven] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e Your Race Will Change in:"}]}');
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_elven] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 3"}]}'), 20);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_elven] ~ ~ ~ 1 1.5 1'), 20);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_elven] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 2"}]}'), 40);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_elven] ~ ~ ~ 1 1.5 1'), 40);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_elven] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 1"}]}'), 60);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_elven] ~ ~ ~ 1 1.5 1'), 60);
                                    system.runTimeout(() => event.source.addTag('nightvision_off'), 85);
                                    system.runTimeout(() => event.source.runCommand('replaceitem entity @a[tag=race_elven] slot.armor.head 0 race:elven_ears 1 0 {"minecraft:keep_on_death":{},"minecraft:item_lock":{"mode":"lock_in_slot"}}'), 85);
                                    system.runTimeout(() => event.source.runCommand('replaceitem entity @a[tag=race_elven] slot.hotbar 7 race:elf_nightvission_off 1 0 {"minecraft:keep_on_death":{},"minecraft:item_lock":{"mode":"lock_in_slot"}}'), 85);
                                    system.runTimeout(() => event.source.runCommand('replaceitem entity @a[tag=race_elven] slot.hotbar 8 race:elven_superjump 1 0 {"minecraft:keep_on_death":{},"minecraft:item_lock":{"mode":"lock_in_slot"}}'), 85);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=race_elven] remove race_human'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=race_elven] remove race_dwarf'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=race_elven] remove race_avian'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=race_elven] remove has_wings'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s race:dwarf_haste'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s race:dwarfs_fury'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s race:super_launch'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s firework_rocket'), 84);
                                    system.runTimeout(() => event.source.runCommand('tellraw @a {"rawtext":[{"text":"§e§l"},{"selector":"@s"},{"text":"§r changed his/her race to an Elf!"}]}'), 85);
                                    system.runTimeout(() => event.source.removeTag('race_feline'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s race:feline_helmet'), 84);
                                    system.runTimeout(() => event.source.addTag('is_changing'), 20);
                                    system.runTimeout(() => event.source.removeTag('is_changing'), 84);
                                    system.runTimeout(() => event.source.runCommandAsync('particle race:race_change ~ ~ ~'), 80);



                                    break;

                                case 1:
                                    event.source.runCommand('tag @s[tag=race_elven] remove race_elven');
                                    event.source.runCommand('tag @s[tag=race_elven] remove nightvision_off');
                                    event.source.runCommand('tag @s[tag=race_elven] remove nightvision_on');
                                    event.source.runCommand('tag @s[tag=race_elven] remove title @s title §4Race Reset');
                                    event.source.runCommand('playsound mob.enderdragon.growl @s[tag=race_elven] ~ ~ ~ 0.1 1 0.1');
                                    event.source.runCommand('clear @s[tag=race_elven] race:elven_ears');
                                    event.source.runCommand('clear @s[tag=race_elven] race:elven_superjump');
                                    event.source.runCommand('clear @s[tag=race_elven] race:elf_nightvission_off');
                                    event.source.runCommand('clear @s[tag=race_elven] race:elf_nightvission_on');
                                    break;

                            }
                        })
                        break;

                    case 2:
                        racemenu_avian.show(source).then(r => {
                            switch (r.selection) {
                                case 0:
                                    event.source.addTag('race_avian');
                                    event.source.runCommand('title @s[tag=race_avian] title Race Selected!');
                                    event.source.runCommand('tellraw @s[tag=race_avian] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e Your Race Will Change in:"}]}');
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_avian] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 3"}]}'), 20);
                                    system.runTimeout(() => event.source.addTag('is_changing'), 20);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_avian] ~ ~ ~ 1 1.5 1'), 20);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_avian] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 2"}]}'), 40);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_avian] ~ ~ ~ 1 1.5 1'), 40);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_avian] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 1"}]}'), 60);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_avian] ~ ~ ~ 1 1.5 1'), 60);
                                    system.runTimeout(() => event.source.runCommand('execute if entity @a[tag=race_avian] run replaceitem entity @a[tag=race_avian] slot.hotbar 7 race:super_launch 1 0 {"minecraft:keep_on_death":{},"minecraft:item_lock":{"mode":"lock_in_slot"}}'), 84)
                                    system.runTimeout(() => event.source.addTag('has_wings'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=race_avian] remove race_human'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=race_avian] remove race_elven'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=race_avian] remove race_dwarf'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=race_avian] remove nightvision_off'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s[tag=race_avian] remove nightvision_on'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_avian] race:elven_ears'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_avian] race:dwarf_haste'), 84);
                                    system.runTimeout(() => event.source.removeTag('race_feline'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s race:feline_helmet'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_avian] race:dwarfs_fury'), 84);
                                    system.runTimeout(() => event.source.removeTag('is_changing'), 84);
                                    system.runTimeout(() => event.source.runCommandAsync('particle race:race_change ~ ~ ~'), 80);
                                    system.runTimeout(() => event.source.runCommand('tellraw @a {"rawtext":[{"text":"§e§l"},{"selector":"@s"},{"text":"§r changed his/her race to an Avian!"}]}'), 85);



                                    break;

                                case 1:
                                    event.source.runCommand('race_avian');
                                    event.source.runCommand('has_wings');
                                    event.source.runCommand('title @s title §4Race Reset');
                                    event.source.runCommand('playsound mob.enderdragon.growl @s[tag=race_avian] ~ ~ ~ 0.1 1 0.1');
                                    event.source.runCommand('clear @s[tag=race_avian] race:elven_ears');
                                    event.source.runCommand('clear @s[tag=race_avian] race:super_launch');
                                    event.source.runCommand('clear @s[tag=race_avian] firework_rocket');
                                    break;
                            }
                        })
                        break;

                    case 3:
                        racemenu_dwarf.show(source).then(r => {
                            switch (r.selection) {
                                case 0:
                                    event.source.addTag('race_dwarf');
                                    event.source.runCommand('title @s[tag=race_dwarf] title Race Selected!');
                                    event.source.runCommand('tellraw @s[tag=race_dwarf] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e Your Race Will Be Changed in:"}]}');
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_dwarf] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 3"}]}'), 20);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_dwarf] ~ ~ ~ 1 1.5 1'), 20);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_dwarf] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 2"}]}'), 40);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_dwarf] ~ ~ ~ 1 1.5 1'), 40);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_dwarf] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 1"}]}'), 60);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_dwarf] ~ ~ ~ 1 1.5 1'), 60);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove race_human'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove race_elven'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove race_avian'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove nightvision_off'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove nightvision_on'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove has_wings'), 84);
                                    system.runTimeout(() => event.source.removeTag('race_feline'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s race:feline_helmet'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s race:elven_ears'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_dwarf] race:elven_superjump'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_dwarf] race:elf_nightvission_off'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_dwarf] race:elf_nightvission_on'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_dwarf] race:super_launch'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_dwarf] firework_rocket'), 84);
                                    system.runTimeout(() => event.source.runCommand('tellraw @a {"rawtext":[{"text":"§e§l"},{"selector":"@s"},{"text":"§r changed his/her race to Dwarf!"}]}'), 85);
                                    system.runTimeout(() => event.source.addTag('is_changing'), 20);
                                    system.runTimeout(() => event.source.removeTag('is_changing'), 84);
                                    system.runTimeout(() => event.source.runCommandAsync('particle race:race_change ~ ~ ~'), 80);


                                    break;

                                case 1:
                                    event.source.runCommand('tag @s remove race_dwarf');
                                    event.source.runCommand('title @s title §4Race Reset');
                                    event.source.runCommand('playsound mob.enderdragon.growl @s ~ ~ ~ 0.1 1 0.1');
                                    event.source.runCommand('clear @s race:dwarf_haste');
                                    event.source.runCommand('clear @s race:dwarfs_fury');
                                    break;
                            }
                        })
                        break;

                    case 4:
                        racemenu_feline.show(source).then(r => {
                            switch (r.selection) {
                                case 0:
                                    event.source.addTag('race_feline');
                                    event.source.runCommand('title @s[tag=race_feline] title Race Selected!');
                                    event.source.runCommand('tellraw @s[tag=race_feline] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e Your Race Will Be Changed in:"}]}');
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_feline] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 3"}]}'), 20);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_feline] ~ ~ ~ 1 1.5 1'), 20);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_feline] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 2"}]}'), 40);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_feline] ~ ~ ~ 1 1.5 1'), 40);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s[tag=race_feline] {"rawtext":[{"text":"§4§l[ Race ]"},{"text":"§r§e 1"}]}'), 60);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s[tag=race_feline] ~ ~ ~ 1 1.5 1'), 60);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove race_human'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove race_elven'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove race_avian'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove race_dwarf'), 84)
                                    system.runTimeout(() => event.source.runCommand('tag @s remove nightvision_off'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove nightvision_on'), 84);
                                    system.runTimeout(() => event.source.runCommand('tag @s remove has_wings'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_feline] race:elven_ears'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_feline] race:elven_superjump'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_feline] race:elf_nightvission_off'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_feline] race:elf_nightvission_on'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_feline] race:super_launch'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_feline] race:dwarfs_fury'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_feline] race:dwarf_haste'), 84);
                                    system.runTimeout(() => event.source.runCommand('clear @s[tag=race_feline] firework_rocket'), 84);
                                    system.runTimeout(() => event.source.runCommand('tellraw @a {"rawtext":[{"text":"§e§l"},{"selector":"@s"},{"text":"§r changed his/her race to Feline!"}]}'), 85);
                                    system.runTimeout(() => event.source.runCommand('replaceitem entity @a[tag=race_feline] slot.armor.head 0 race:feline_helmet 1 0 {"minecraft:keep_on_death":{},"minecraft:item_lock":{"mode":"lock_in_slot"}}'), 85);
                                    system.runTimeout(() => event.source.addTag('is_changing'), 20);
                                    system.runTimeout(() => event.source.removeTag('is_changing'), 84);
                                    system.runTimeout(() => event.source.runCommandAsync('particle race:race_change ~ ~ ~'), 80);

                                    break;



                                case 1:
                                    event.source.removeTag('race_feline');
                                    event.source.runCommandAsync('title @s title §4Canceled');
                                    event.source.runCommand('playsound mob.enderdragon.growl @s ~ ~ ~ 0.1 1 0.1');
                                    event.source.runCommand('clear @s race:feline_helmet');
                                    break;

                            }
                        })
                        break;
                }
            })
            break;

    };
});

world.afterEvents.itemUse.subscribe((event) => {
    const { source, itemStack } = event
    switch (itemStack.typeId) {
        case "race:main_menu":
            mainmenu.show(source).then(r => {
                switch (r.selection) {
                    case 0:
                        newsletter.show(source);
                        break;

                    case 1:
                        info.show(source).then(r => {
                            switch (r.selection) {
                                case 0:
                                    info_server.show(source);
                                    break;

                                case 1:
                                    info_addon.show(source);
                                    break;
                            }
                        })
                        break;

                    case 2:
                        fasttravel.show(source).then(r => {
                            switch (r.selection) {
                                //Human
                                case 0:
                                    event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast Travel ]"},{"text":"§r§e You will be teleported in:"}]}');
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast Travel ]"},{"text":"§r§e 3"}]}'), 20);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 20);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast Travel ]"},{"text":"§r§e 2"}]}'), 40);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 40);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast Travel ]"},{"text":"§r§e 1"}]}'), 60);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 60);
                                    system.runTimeout(() => event.source.runCommand('camera @s fade time 0.1 4 3'), 75);
                                    system.runTimeout(() => event.source.runCommand('playsound portal.travel @s ~ ~ ~ 1 2 1'), 75);
                                    system.runTimeout(() => event.source.runCommand('tp @s -550 70 -1073'), 80);
                                    break;
                                //Elf
                                case 1:
                                    event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast Travel ]"},{"text":"§r§e You will be teleported in:"}]}');
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast Travel ]"},{"text":"§r§e 3"}]}'), 20);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 20);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast Travel ]"},{"text":"§r§e 2"}]}'), 40);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 40);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast Travel ]"},{"text":"§r§e 1"}]}'), 60);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 60);
                                    system.runTimeout(() => event.source.runCommand('camera @s fade time 0.1 4 3'), 75);
                                    system.runTimeout(() => event.source.runCommand('playsound portal.travel @s ~ ~ ~ 1 2 1'), 75);
                                    system.runTimeout(() => event.source.runCommand('tp @s -1027 77 802'), 80);

                                    break;
                                //Avian
                                case 2:

                                    event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast Travel ]"},{"text":"§r§e You will be teleported in:"}]}');
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast travel ]"},{"text":"§r§e 3"}]}'), 20);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 20);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast Travel ]"},{"text":"§r§e 2"}]}'), 40);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 40);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast travel ]"},{"text":"§r§e 1"}]}'), 60);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 60);
                                    system.runTimeout(() => event.source.runCommand('camera @s fade time 0.1 4 3'), 75);
                                    system.runTimeout(() => event.source.runCommand('playsound portal.travel @s ~ ~ ~ 1 2 1'), 75);
                                    system.runTimeout(() => event.source.runCommand('tp @s 339 188 -451'), 80);
                                    system.runTimeout(() => event.source.runCommand('playsound portal.travel @s ~ ~ ~ 1 2 1'), 85);


                                    break;
                                //Dwarf
                                case 3:
                                    event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast travel ]"},{"text":"§r§e You will be teleported in:"}]}');
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast travel ]"},{"text":"§r§e 3"}]}'), 20);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 20);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast travel ]"},{"text":"§r§e 2"}]}'), 40);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 40);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast travel ]"},{"text":"§r§e 1"}]}'), 60);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 60);
                                    system.runTimeout(() => event.source.runCommand('camera @s fade time 0.1 4 3'), 75);
                                    system.runTimeout(() => event.source.runCommand('playsound portal.travel @s ~ ~ ~ 1 2 1'), 75);
                                    system.runTimeout(() => event.source.runCommand('tp @s 1088 20 -535'), 80);
                                    system.runTimeout(() => event.source.runCommand('playsound portal.travel @s ~ ~ ~ 1 2 1'), 85);


                                    break;

                                case 4:
                                    event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast travel ]"},{"text":"§r§e You will be teleported in:"}]}');
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast travel ]"},{"text":"§r§e 3"}]}'), 20);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 20);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast travel ]"},{"text":"§r§e 2"}]}'), 40);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 40);
                                    system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§4§l[ Fast travel ]"},{"text":"§r§e 1"}]}'), 60);
                                    system.runTimeout(() => event.source.runCommand('playsound random.levelup @s ~ ~ ~ 1 1.5 1'), 60);
                                    system.runTimeout(() => event.source.runCommand('camera @s fade time 0.1 4 3'), 75);
                                    system.runTimeout(() => event.source.runCommand('playsound portal.travel @s ~ ~ ~ 1 2 1'), 75);
                                    system.runTimeout(() => event.source.runCommand('tp @s -5454 78 -2025'), 80);
                                    system.runTimeout(() => event.source.runCommand('playsound portal.travel @s ~ ~ ~ 1 2 1'), 85);
                                    break;
                            }
                        })
                        break;

                    case 3:
                        sizemenu.show(source).then(r => {
                            switch (r.selection) {
                                case 0:
                                    system.runTimeout(() => event.source.runCommand('playanimation @a animation.playersize.tall none 0 "0" a'), 5);
                                    event.source.runCommand('playanimation @a animation.playersize.short none 0 "1" a');
                                    event.source.runCommand('tellraw @s {"rawtext":[{"text":"§2§l[ Size Menu ]§r Tall Player Size Chosen. Change your perspective to third person to show the results :)"}]}');
                                    break;

                                case 1:
                                    event.source.runCommand('playanimation @a animation.playersize.tall none 0 "1" a');
                                    event.source.runCommand('playanimation @a animation.playersize.short none 0 "1" a');
                                    event.source.runCommand('tellraw @s {"rawtext":[{"text":"§2§l[ Size Menu ]§r Your size has been reset"}]}');
                                    break;

                                case 2:
                                    system.runTimeout(() => event.source.runCommand('playanimation @s animation.playersize.short none 0 "0" a'), 5);
                                    event.source.runCommand('playanimation @a animation.playersize.tall none 0 "1" a');
                                    event.source.runCommand('tellraw @s {"rawtext":[{"text":"§2§l[ Size Menu ]§r Short Player Size Chosen. Change your perspective to third person to show the results :)"}]}');
                                    break;
                            }
                        })
                        break;

                    case 4:
                        toogle_abbilities.show(source).then(r => {
                            switch (r.formValues) {
                                case 0:
                                    event.source.addTag('enabled_abbilities');
                                    event.source.removeTag('disabled_abbilities');
                                    break;

                                case 1:
                                    event.source.removeTag('enabled_abbilities');
                                    event.source.addTag('disabled_abbilities');
                                    break;
                            }
                        })
                        break;
                    case 5:
                        credits.show(source);
                        break;

                    default:
                        break;

                };
            })
    }
});

const racemenu = new ActionFormData()
    .title("Race Menu")
    .body('Here, you can choose your race.\n\nYou Can Change It Only ONCE! Other Race Changes Needs To Be Unlocked By An Admin.')
    //0
    .button('Human Race')
    //1
    .button('Elf Race')
    //2
    .button('Avian Race')
    //3
    .button('Dward Race')
    //4
    .button('Feline Race')

const racemenu_human = new ActionFormData()
    .title('')
    .body("Humans are known for their inventions.\n\nThe first major breakthrough was the Music Player,\ncreated by George Trivia in late 1115 when he was just 15 years old.\n\nThis invention quickly spread across civilizations, revolutionizing entertainment and earning him fame as a brilliant inventor.\n\nHowever, his most groundbreaking creation was the Redstone Component Armor, a technological marvel that harvested energy from its surroundings, allowing the wearer to channel it as magic.\n\nThis armor became a crucial advancement in warfare and industry, marking a new era of technological and arcane fusion.\n\n§2§lAdvantages:§r\n\n- Redstone Component & Advanced Machinery\n\n- Can wear all types of armor\n\n- Can use ''magic'' through advanced redstone tools\n\n\n§l§4Disadvantages:§r\n\n- Lacks natural magic abilities\n\n- No innate effect advantages at the start")
    .button('Choose')

const racemenu_elf = new ActionFormData()
    .title('')
    .body('')
    .button('Choose')

const racemenu_avian = new ActionFormData()
    .title('')
    .body('')
    .button('Choose')

const racemenu_dwarf = new ActionFormData()
    .title('')
    .body('')
    .button('Choose')

const racemenu_feline = new ActionFormData()
    .title('')
    .body('')
    .button('Choose')

const mainmenu = new ActionFormData()
    .title("")
    .body("\n\n")
    //0
    .button("§5News", "textures/ui/newsletter")
    //1
    .button("§5Info", "textures/ui/info")
    //2
    .button('§5Fast Travel (NEW)', "textures/ui/fast_travel")
    //3
    .button("§5Player Size (NEW)", "textures/ui/playersizemenu")
    //4
    .button('§5Toggle Abbilities', "textures/ui/racemenu")
    //5
    .button("§5Credits", "textures/ui/credits")

const fasttravel = new ActionFormData()
    .title("Fast Travel")
    .body('Here you can fast travel to every city, or outside the map to explore normal generated world.\n\n§4Warning! Building outside the map is not allowed!')
    .button("Human's City")
    .button("Elf's City")
    .button("Avian's City")
    .button("Dwarf's City")
    .button("Explore")

const newsletter = new ActionFormData()
    .title("SMP's Newsletter")
    .body("§lv0.1.0 is OUT! FINALLY!§r\n\n\nBut... What did I added?... Well:\n\n§2Size Menu!§r\n\nYeah! You heard it right! You can finally choose your size in game! It's all up to you if you want to be tall, short or just a normal size.\n\nSimply Open a menu, click the `Player Size` button, and choose from being Tall, short or just a normal player size.\n\nSadly, there is no way i could make the camera pov follow your size. But if there will be this option, or i will find out a way to do it, ya bet imma make it.\n\n§2§lHeavy Hammer Recipe!§r\n\nYep! I buffed the hammer and added it's recipe. It's not cheap but also not expensive. I'd say, the price for it is balanced. Of course, if you have any suggestions on what can i change, You're always welcome to tell me.")
    .button("Exit", "textures/ui/Exit")

const info = new ActionFormData()
    .title("SMP's Info")
    .body("Info About EndfallenSMP")
    //0
    .button("Server")
    //1
    .button('Addon')

const info_server = new ActionFormData()
    .title('Server Info')
    .body('Server Version INFO: E.R.A 0.1.0 / Up-To-Date\n\n\nEndfallenSMP, released to the public on March 23rd, 2024, is a roleplay-driven server where you shape your own destiny.\n\nThe lore is entirely player-driven, meaning your actions can alter the course of history, change the final outcome, or even put an end to ongoing conflicts.\n\nWill you rise as a hero, or embrace the path of a villain?\n\nThe choice is yours.\n\nWelcome to EndfallenSMP.')
    .button('Exit')

const info_addon = new ActionFormData()
    .title('Addon Info')
    .body("Endfallen's Race Addon\n\nv0.1.0\n\nDevelopment Status: Up-To-Date\n\nFuture Verion: v0.1.1 ( Magic Update )")
    .button('Exit')


const sizemenu = new ActionFormData()
    .title("Size Menu")
    .body("Be Aware!\n\nIf you die, you will need to choose the size once again. And if you choose your size, you will need to relog to change it once again!\n\nEnjoy being short ;)")
    .button("Tall")
    .button("Normal")
    .button("Short")

const toogle_abbilities = new ActionFormData()
    .title("Toogle Abbilities")
    .body('')
    .button('Enable Abbilities')
    .button('Disable Abbilities')

const music_player = new ActionFormData()
    .title('')
    .body('')
    .button('§2§lPlay §3( Offhand )', "textures/ui/ui_mp_play")
    .button('§4§lStop', 'textures/ui/ui_mp_stop')
    .button('§6§lHow does it work?', 'textures/ui/ui_mp_guide')

const mp_guide = new ActionFormData()
    .title('Music Player Guide')
    .body('§3How Does the §6§l[Music Player]§r§3 Work?§r\nIt’s really §asimple§r! Here’s how you can use it.\n\n§b§lConverting Vanilla Music Discs§r\n\nTo play a standard Minecraft Music Disc in the ERA Music Player, you first need to §econvert it into ERA’s special version§r.\nDon’t worry, it’s an §beasy§r process.\n\nFirst, open your §ainventory§r crafting grid.\n\nThen, place a §evanilla Music Disc§r in any crafting slot.\n\nThis will transform it into the §dERA Music Disc version§r.\n\nOnce you have the §dERA version§r of the disc, put it in your §a§loff-hand§r slot and use the §6§lMusic Player item§r.\nThe Music Player is now ready to go.\n\n§c§lERA-Exclusive Music Discs§r\n\nIf you`re using new music discs added by ERA, you don`t need to convert them.\n\nSimply place the disc in your §aoff-hand§r and use the §6Music Player item§r to start playing music.\n\n\n§e§lNow you`re all set to experience ERA`s music system in the best way possible.')
    .button('I understand now')

//Elves' Super Jump
world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent('race:jump', {
        onUse(event) {
            event.source.runCommand("effect @s levitation 1 25 true"),
                event.source.runCommand("playsound mob.enderdragon.flap @a ~ ~ ~ 1 2 1"),
                event.source.runCommand("particle race:superjump2 ~ ~ ~"),
                event.source.runCommand("particle race:superjump1 ~ ~ ~"),
                system.runTimeout(() => event.source.runCommand("effect @s slow_falling 5 1 true"), 40);
            system.runTimeout(() => event.source.runCommand('playsound script.magic.ping @s'), 600);
            system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§c[Abillity] "},{"text":"§a§lSuper Jump"},{"text":"§r§2 Ready!"}]}'), 600);
        }
    });
});

//Dwarf's Super Haste
world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent('race:superhaste', {
        onUse(event) {
            event.source.runCommand("effect @s haste 10 3 true"),
                event.source.runCommand("title @s title Haste Activated"),
                system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§c[Abillity] "},{"text":"§a§lSuper Haste"},{"text":"§r§2 Ready!"}]}'), 1200);
            system.runTimeout(() => event.source.runCommand('playsound script.magic.ping @s'), 1200);
        }
    });
});

//Elven's Nighvission ON - Use component on nightvission off
world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent('race:nightvision_enable', {
        onUse(event) {
            event.source.runCommand("tag @s add nightvision_on"),
                event.source.runCommand('execute if entity @a[tag=nightvision_on] run replaceitem entity @a[tag=nightvision_on] slot.hotbar 7 race:elf_nightvission_on 1 0 {"minecraft:keep_on_death":{},"minecraft:item_lock":{"mode":"lock_in_slot"}}'),
                event.source.runCommand("tag @s remove nightvision_off"),
                event.source.runCommand("playsound beacon.activate @s ~ ~ ~ 1 1 1"),
                system.runTimeout(() => event.source.runCommand("playsound script.magic.ping @s"), 1200);
            system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§c[Abillity] "},{"text":"§a§lNight Vision"},{"text":"§r§2 Can Be Disabled!"}]}'), 1200);

        }
    });
});

//Elven NV Off
world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent('race:nightvision_disabled', {
        onUse(event) {
            event.source.runCommand("tag @s add nightvision_off"),
                event.source.runCommand('execute if entity @a[tag=nightvision_off] run replaceitem entity @a[tag=nightvision_off] slot.hotbar 7 race:elf_nightvission_off 1 0 {"minecraft:keep_on_death":{},"minecraft:item_lock":{"mode":"lock_in_slot"}}'),
                event.source.runCommand("tag @s remove nightvision_on"),
                event.source.runCommand("playsound beacon.deactivate @s ~ ~ ~ 1 1 1"),
                event.source.runCommand('effect @s night_vision 0')
            system.runTimeout(() => event.source.runCommand("playsound script.magic.ping @s"), 2400);
            system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§c[Abillity] "},{"text":"§a§lNight Vision"},{"text":"§r§2 Can Be Enabled!"}]}'), 2400);
        }
    });
});


//Cancel Block

world.beforeEvents.worldInitialize.subscribe((event) => {
    event.blockComponentRegistry.registerCustomComponent('race:cancel_block', {
        onPlayerInteract(event) {

        }
    });
});


//Dwarf's Fury
world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent('race:dwarffury', {
        onUse(event) {
            event.source.runCommand('effect @s strength 30 2 true'),
                event.source.runCommand('effect @s resistance 30 2 true'),
                event.source.runCommand('title @s title §4Fury Activated'),
                event.source.runCommand('playsound mob.endermen.scream @s ~ ~ ~ 1 0.3 1'),
                event.source.runCommand('playsound random.totem @s ~ ~ ~ 1 0.3 1'),
                system.runTimeout(() => event.source.runCommand('tellraw @s {"rawtext":[{"text":"§c[Abillity] "},{"text":"§a§lDwarfs Furry,{"text":"§r§2 Ready!"}]}'), 2400);
        }
    });
});

//Avian Launch 
world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent('race:avianlaunch', {
        onUse(event) {
            event.source.addTag('launch'),
                system.runTimeout(() => event.source.removeTag('launch'), 60);
        }
    })
});


//Tea
world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent('race:tea', {
        onCompleteUse(event) {
            event.source.runCommand('effect @s regeneration 10 3 true'),
                event.source.runCommand('effect @s speed 10 2 true')
        }
    });
});


//Permadeath Sword
world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent("race:permadeath", {
        onCompleteUse(event) {
            event.source.runCommand('execute at @a[tag=can_die,r=50] run summon lightning_bolt ~ ~ ~ '),
                event.source.runCommand('tag @a[tag=can_die,r=50] add dead'),
                event.source.runCommand('tag @a[tag=dead,r=50] remove can_die'),
                event.source.runCommand("title @a[tag=can_die,r=50] title §4You've died"),
                event.source.startItemCooldown('spirit', 600),
                event.source.runCommand('playsound cs.q1finale2 @a ~ ~ ~ 1 0.5 1'),
                event.source.runCommand('tellraw @a {"rawtext":[{"text":"§7Someone PermaDied..."}]}'),
                event.source.runCommand('effect @a[tag=dead] blindness infinite 25 true'),
                event.source.runCommand('camerashake add @a 0.5 10'),
                system.runTimeout(() => event.source.runCommand('playsound permadeath.final @a'), 20);
        },

        onHitEntity(event) {
            event.hitEntity.addTag('can_die'),
                event.hitEntity.runCommandAsync('title @s[tag=!can_die] title PermaDeath Warning')
            event.hitEntity.runCommandAsync('title @s[tag=!can_die] subtitle Your character can PermaDie now.')
            system.runTimeout(() => event.hitEntity.removeTag('can_die'), 6000)
        },
        onUse(event) {
            event.source.runCommandAsync('playsound permadeath.start @a ~ ~ ~ 1 1 1'),
                event.source.runCommandAsync('effect @a darkness 10 3 true')

        }

    });
});

//Founder Powers:

//The Devourer
world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent("race:the_devouer", {
        onUse(event) {
            event.source.addTag('founder_charging'),
                event.source.runCommandAsync('playsound founder.power @a')
            system.runTimeout(() => event.source.removeTag('founder_charging'), 240)
            system.runTimeout(() => event.source.runCommandAsync("title @a title §4=)"), 240);
            system.runTimeout(() => event.source.runCommandAsync("execute at @e[rm=1,r=100] run summon evocation_fang ~ ~ ~ ~ ~"), 380);
            system.runTimeout(() => event.source.runCommandAsync("effect @e[rm=1,r=100] instant_damage 1 2 true"), 380);
        }
    })
})

//The Liar

world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent('race:the_liar', {
        onUse(event) {
            event.source.addTag('is_invisible')
        },
        onCompleteUse(event) {
            event.source.removeTag('is_invisible')

        }
    })
});
//The Destroyer
world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent("race:the_destroyer", {
        onUse(event) {
            event.source.runCommandAsync('playsound founder.power2 @a'),
                event.source.runCommandAsync('effect @a darkness 25 1 true'),
                system.runTimeout(() => event.source.addTag('founder_destroyer'), 270);
            system.runTimeout(() => event.source.runCommandAsync('effect @e[rm=1,r=100] wither 20 1 true'), 270);
            system.runTimeout(() => event.source.removeTag('founder_destroyer'), 630);
            system.runTimeout(() => event.source.addTag('founder_destroyer1'), 700);
            system.runTimeout(() => event.source.removeTag('founder_destroyer1'), 1100);
            system.runTimeout(() => event.source.runCommandAsync('damage @e[rm=1, r=100] 20 entity_attack'), 1100);



        }
    })
});

//Warhammer
world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent('race:warhammer', {
        onHitEntity(event) {
            event.hitEntity.addEffect('slowness', 10, {
                amplifier: 2,
            });

        },
        onUse(event) {
            event.source.runCommandAsync('playanimation @s animation.player.warhammer.use'),
                event.source.runCommandAsync('inputpermission set @s movement disabled'),
                system.runTimeout(() => event.source.runCommandAsync("playsound warhammer.use @a"), 35);
            system.runTimeout(() => event.source.runCommandAsync("damage @e[rm=1,r=20] 10 mace_smash entity @s"), 45);
            system.runTimeout(() => event.source.runCommandAsync("particle race:warhammer_use_particles ~ ~ ~"), 45);
            system.runTimeout(() => event.source.runCommandAsync('effect @e[rm=1,r=20] levitation 1 25'), 60.5);
            system.runTimeout(() => event.source.runCommandAsync('camera @a[rm=1,r=20] fade time 0 6 3'), 60.5);
            system.runTimeout(() => event.source.runCommandAsync('inputpermission set @s movement enabled'), 60.5);
            system.runTimeout(() => event.source.runCommandAsync('playsound warhammer.knockout @a[rm=1,r=20]'), 45);
            system.runTimeout(() => event.source.runCommandAsync('effect @e[rm=1,r=80] levitation 0'), 70.5);

        }
    })
});

world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent('race:feline_charge', {
        onUse(event) {
            event.source.startItemCooldown('feline_charge', 2400);
            event.source.runCommandAsync('tp @s ^10 ^ ^');
        }
    })
})