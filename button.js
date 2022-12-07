class Button{
    constructor(x, y, height, width){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    buffer(gl, hoehe){
        console.log("Buttonbuffer");
        const positionBuffer = gl.createBuffer();
  
        // Select the positionBuffer as the one to apply buffer
        // operations to from here out.
    
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
        // Now create an array of positions for the square.
    
        
        const positions = [this.x, this.height, -this.x, this.height, this.width, (-1*this.height), -this.width, (-1*this.height) ];
    
        // Now pass the list of positions into WebGL to build the
        // shape. We do this by creating a Float32Array from the
        // JavaScript array, then use it to fill the current buffer.
    
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    
        // Now set up the colors for the vertices
    
    
    
        const colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    
        return {
        position: positionBuffer,
        color: colorBuffer,
        };
    }
}


