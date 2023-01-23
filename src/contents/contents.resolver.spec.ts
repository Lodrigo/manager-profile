import { Test, TestingModule } from '@nestjs/testing';
import { Content } from './models/contents.model';
import { ContentsService } from './contents.service';
import { ContentResolver } from './contents.resolver';

const mockContent: Content = {
    id: "123456789",
    description: "Relevos",
    name: "Aula de geografia",
    type: "pdf"
};

const mockUpdateContent: Content = {
    id: "123456789",
    description: "Pintura",
    name: "Aula de artes",
    type: "vid"
};

const contentServiceMock = {
    findOneById: jest.fn((id: string): Content => mockContent),
    findAll: jest.fn((): Content[] => [mockContent]),
    create: jest.fn((): Content => mockContent),
    update: jest.fn((): Content => mockUpdateContent),
    remove: jest.fn((id: string): Boolean => true),
};

describe('ContentResolver', () => {
    let resolver: ContentResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ContentResolver,
                { provide: ContentsService, useValue: contentServiceMock },
            ],
        }).compile();

        resolver = module.get<ContentResolver>(ContentResolver);
    });

    it('Deve ser definido', () => {
        expect(resolver).toBeDefined();
    });

    it('Deve consultar um único conteúdo', async () => {
        const result = await resolver.content("123456789");
        expect(result).toEqual(mockContent);
        expect(contentServiceMock.findOneById).toBeCalledTimes(1);
    });

    it('Deve consultar todos conteúdos', async () => {
        const result = await resolver.contents();
        expect(Array.isArray(result)).toEqual(true);
        expect(contentServiceMock.findAll).toBeCalledTimes(1);
    });

    it('Deve enviar um novo conteúdo para cadastro', async () => {
        const result = await resolver.addContent({
            description: "Relevos",
            name: "Aula de geografia",
            type: "pdf"
        });
        expect(result).toEqual(mockContent);
        expect(contentServiceMock.create).toBeCalledTimes(1);
    });

    it('Deve enviar um parametro para remover um conteúdo', async () => {
        const result = await resolver.removeContent("123456789");
        expect(result).toEqual(true);
        expect(contentServiceMock.remove).toBeCalledTimes(1);
    });

    it('Deve enviar alterar um conteúdo', async () => {
        const result = await resolver.updateContent(mockContent);
        expect(result).toEqual(mockUpdateContent);
        expect(contentServiceMock.update).toBeCalledTimes(1);
    });
});