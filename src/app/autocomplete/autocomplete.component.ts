import { Component, OnInit } from '@angular/core';
import { GetusersService } from '../getusers.service'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District of Columbia', 'Florida'
    , 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky'
    , 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'];
  filteredItems: Array<any>;
  selectedItems: Set<string> = new Set<string>();
  inputText: string = '';
  show: boolean;
  statesKey: Array<any> = new Array<any>();

  // constructor(private getuserservice: GetusersService) { }

  ngOnInit() {
    this.statesKey = this.states.map(e => {
      return {
        'value': e,
        'isSelected': false
      }
    })
  }


  filterValues(inputValue) {
    this.show = true;
    this.filteredItems = this.statesKey.filter(state => state.value.includes(inputValue.value));
    if (Object.keys(inputValue.value).length === 0) {	
      this.filteredItems = [];	
    }
  }

  addToSelectedItems(state, inputvalue, index) {
    this.filteredItems[index].isSelected = true;
    inputvalue.value = '';
    this.selectedItems.add(state);  
  }

  deleteItem(state) {
    let deleteState = this.filteredItems.find(each => each.value === state)
    deleteState.isSelected = false
    this.selectedItems.delete(state)
  }
}
