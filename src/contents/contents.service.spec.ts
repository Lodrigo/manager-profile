import { Test, TestingModule } from '@nestjs/testing';
import { ContentsService } from './contents.service';
import { Model } from 'mongoose';
import { Content } from './interfaces/content.interface'

describe('ContentService', () => {

    let contentsArray;
    let mockContent;
    let service: ContentsService;
    let model: Model<Content>

    mockContent =
    {
        id: "123456789",
        name: "Aula de artes",
        description: "Pintura em tela",
        type: "pdf"
    }

    contentsArray = [
        {
            id: "123456789",
            name: "Aula de artes",
            description: "Pintura em tela",
            type: "pdf"
        },
        {
            id: "987654321",
            name: "Aula de história",
            description: "História antiga",
            type: "video"
        },
        {
            id: "564789123",
            name: "Aula de inglês",
            description: "Historia antiga",
            type: "video"
        }
    ]

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ContentsService,
                {
                    provide: 'CONTENT_MODEL',
                    useValue: {
                        findAll: jest.fn(),
                        findOneById: jest.fn(),
                        create: jest.fn(),
                        remove: jest.fn(),
                        destroy: jest.fn(() => mockContent),
                        new: jest.fn().mockResolvedValue(mockContent),
                        constructor: jest.fn().mockResolvedValue(mockContent),
                    },
                },
            ],
        }).compile();

        service = module.get(ContentsService);
        model = module.get<Model<Content>>('CONTENT_MODEL');
    })

    it('Deve retornar todos conteúdos', async () => {
        jest.spyOn(service, "findAll").mockReturnValue(contentsArray);

        const contents = await service.findAll();
        expect(contents).toEqual(contentsArray);
    })

    it('Deve retornar um conteúdo', async () => {
        jest.spyOn(service, "findOneById").mockReturnValue(mockContent);

        const contents = await service.findOneById('1');
        expect(service.findOneById).toBeCalledWith("1");
        expect(contents).toEqual(mockContent);
    })

    // it('Deve cadastrar um conteúdo', async () => {
    //     jest.spyOn(service, "create").mockReturnValue(mockContent);

    //     const contents = await service.create();
    //     expect(service.create).toBeCalledWith("1");
    //     expect(contents).toEqual(mockContent);
    // })
})

