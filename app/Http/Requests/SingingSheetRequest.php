<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SingingSheetRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'lyrics' => ['required', 'string'],
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $lyrics = $this->input('lyrics');

            // strip_tags関数を使用してspan, br, divタグ以外のタグを取り除く
            $filteredLyrics = strip_tags($lyrics, '<span><br><div>');

            // フィルタリング後の値をセットする
            $this->merge(['lyrics' => $filteredLyrics]);
        });
    }
}
