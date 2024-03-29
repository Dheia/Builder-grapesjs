<?php

namespace BytePlatform\Builder\Livewire\TemplateManager;

use BytePlatform\Builder\TemplateBuilder;
use BytePlatform\Component;

class Index extends Component
{
    public $callbackEvent;
    public function mount()
    {
        $this->callbackEvent = request('callbackEvent');
    }
    public function getTemplates()
    {
        $this->skipRender();
        return TemplateBuilder::getTemplates();

    }
    public function render()
    {
        return view('builder::template-manager.index', []);
    }
}
