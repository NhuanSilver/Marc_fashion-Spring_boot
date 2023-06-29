import {Component} from '@angular/core';

interface Option {
  color: string,
  size: string,
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  isSize: boolean = false;
  isColor: boolean = false;
  selectedColors: Set<string> = new Set();
  selectedSizes: Set<string> = new Set();
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  colors: string[] = ['Đỏ', 'Xanh', 'Vàng', 'Đen', 'Trắng']
  optionImage : Set<string> = new Set();
  options: Option[] = []

  sizeChanged(size: string) {
    let isExist = this.selectedSizes.has(size)
    if (isExist) {
      this.selectedSizes.delete(size)
    } else {
      this.selectedSizes.add(size)
    }
    this.generateOptions();
  }

  colorChanged(color: string) {
    let isExist = this.selectedColors.has(color)
    if (isExist) {
      this.selectedColors.delete(color)
    } else {
      this.selectedColors.add(color)
    }
    this.generateOptions();
  }

  private generateOptions() {
    this.options = [];
    let sizeArr = Array.from(this.selectedSizes);
    let colorArr = Array.from(this.selectedColors);
    sizeArr.map( size =>{
      colorArr.map( color =>{
        const option = {
          size: size,
          color: color
        }
        this.options.push(option)
      })
    })
    this.generateOptionImage()
  }
  private generateOptionImage(){
    this.optionImage.clear()
    this.options.map(option => this.optionImage.add(option.color))
  }

  deleteOption(option: Option) {
    this.options.map((o,index) =>{
      if (o === option) this.options.splice(index, 1);
    })
    this.generateOptionImage()
  }
}
