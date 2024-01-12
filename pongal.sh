#!/bin/bash

# Pongal Greetings at pongal.tamilwords.net
# Happy Pongal Greeting wishes in Terminal

echo -ne "\n\n 🌾 Pongal Greetings 🌾 \n\n"

progress_bar() {
    local total_steps=50
    local width=30

    for ((i=0; i<=${total_steps}; i++)); do
        percentage=$((i * 100 / total_steps))
        progress=$((i * width / total_steps))
        printf "\r[%-${width}s] %d%%" $(printf "#%.0s" $(seq 1 ${progress})) ${percentage}
        sleep 0.1
    done
    echo -ne "\r\033[2K"
}

progress_bar

GREEN="\e[32m"
ENDCOLOR="\e[0m"

echo -e "${GREEN}      


▒█░▒█ █▀▀█ █▀▀█ █▀▀█ █░░█ 
▒█▀▀█ █▄▄█ █░░█ █░░█ █▄▄█ 
▒█░▒█ ▀░░▀ █▀▀▀ █▀▀▀ ▄▄▄█ 

▒█▀▀█ █▀▀█ █▀▀▄ █▀▀▀ █▀▀█ █░░ 
▒█▄▄█ █░░█ █░░█ █░▀█ █▄▄█ █░░ 
▒█░░░ ▀▀▀▀ ▀░░▀ ▀▀▀▀ ▀░░▀ ▀▀▀


  /\🍚
   /  \   
 _/____\_
 |      |   
 |  🔥  |
 |  🪵  |
 |______|

${ENDCOLOR}"