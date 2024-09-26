function solution(wallpaper) {
    let [lux, luy, rdx, rdy] = [50, 50, 0, 0];

    
    for (let i = 0; i < wallpaper.length; i++) {
        let line = wallpaper[i];
        for (let j = 0; j < line.length; j++) {
            let file = line[j];

           
            if (file === '#') {
                lux = Math.min(lux, i);
                luy = Math.min(luy, j);
                rdx = Math.max(rdx, i + 1);
                rdy = Math.max(rdy, j + 1);
            }
        }
    }

    return [lux, luy, rdx, rdy];
}